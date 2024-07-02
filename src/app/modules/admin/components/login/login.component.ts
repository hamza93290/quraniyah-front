import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@core/services/login/login.service';
import { TokenService } from '@core/services/token/token.service';
import { Subscription, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public hasError: boolean = false;
  private loginSubscription!: Subscription;
  public dataFromFrJson:any;
  public errorMsg: string = "";
  @Output() isAuth: EventEmitter<boolean> = new EventEmitter<boolean>();


  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private login : LoginService,
    private router: Router,
    private tokenService: TokenService,
  ) {}


  onSubmit(){    
    console.log("dans le submit");
    
    this.hasError = false;
    /*
      si l'authentification échoue on passe le flag hasError à true pour afficher un message d'erreur, 
      sinon, on redirigera vers la page d'acceuil
    */
    if (this.loginForm.valid) {
      console.log("dans le 1 if du submit");
      
      this.hasError = false;
      const loginF = this.loginForm.value;


      this.loginSubscription = this.login.loginAndGenerateToken(loginF)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.hasError = true;
            if (error.status === 0) {
              this.errorMsg = this.dataFromFrJson.errors.user.networkError;
            } else if (error.status === 403) {
              this.errorMsg = this.dataFromFrJson.errors.user.nonAuthorizedAccess+' : ' + error;
            } else {
              this.errorMsg = error.error;
            }
  
            return throwError(() => error);
          })
        )
        .subscribe((response: any) => {
          if (!response.error) {
            // Utilisation du TokenService pour stocker l'access token dans le localStorage
            this.tokenService.setAccessToken(response);
            //const tokenDurationInSeconds = this.tokenService.calculateTokenExpirationTime();
            //this.tokenService.checkCountdown(tokenDurationInSeconds, false);

            // Redirection vers la page des sous traitants
            this.router.navigate(['/admin/liste']);
            this.isAuth.emit(true)
            console.log("je suis connecter");
            
          }
        });
    } else {
      this.hasError = false;
      Object.values(this.loginForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}