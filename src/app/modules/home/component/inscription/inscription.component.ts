import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElevesService } from '@core/services/eleves/eleves.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {

  public emailRegExp: RegExp = /^[a-zA-Z](?:[a-zA-Z\d]*[-._]?[a-zA-Z\d]+)@[a-zA-Z\d]+[-._]?[a-zA-Z\d]+\.[a-zA-Z]{2,3}$/;

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailRegExp)]),
    telephone: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    cursus: new FormControl('', [Validators.required])
  },
  )

  constructor(
    private router: Router,
    private authService: ElevesService
  ) { }

  register() {
    // if (!this.registerForm.valid) {
    //   return;
    // }
    // this.authService.register(this.registerForm.value).pipe(
    //   // If registration was successfull, then navigate to login route
    //   tap(() => this.router.navigate(['../login']))
    // ).subscribe();
  }
}
