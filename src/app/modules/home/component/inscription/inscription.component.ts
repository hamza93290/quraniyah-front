import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElevesService } from '@core/services/eleves/eleves.service';
import { ModalService } from '@core/services/modal/modal.service';
import { MatStepper } from '@angular/material/stepper';
import { PaypalService } from '@core/services/paypal/paypal.service';
import { ReglementComponent } from '../modal/reglement/reglement.component';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent implements OnInit {
  
  @ViewChild('stepper') private myStepper!: MatStepper;

  foods: Food[] = [
    {value: 'Arabe', viewValue: 'Arabe'},
    {value: 'Coran', viewValue: 'Coran'},
    {value: 'ArabeCoran', viewValue: 'Arabe et Coran'},
  ];

  public emailRegExp: RegExp = /^[a-zA-Z](?:[a-zA-Z\d]*[-._]?[a-zA-Z\d]+)@[a-zA-Z\d]+[-._]?[a-zA-Z\d]+\.[a-zA-Z]{2,3}$/;
  public duration: string = "1000";
  public responsePaypal : boolean = false


  // registerForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   lastname: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailRegExp)]),
  //   telephone: new FormControl('', [Validators.required]),
  //   age: new FormControl('', [Validators.required]),
  //   cursus: new FormControl('', [Validators.required]),
  //   checkbox: new FormControl([false, Validators.requiredTrue])
  // },
  // )
  registerForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailRegExp)]],
    telephone: ['', Validators.required],
    age: ['', Validators.required],
    cursus: ['', Validators.required],
    checkbox: [false, Validators.requiredTrue]  // Assurez-vous que la valeur initiale est false
  })

  constructor(
    private router: Router,
    private eleveService: ElevesService,
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private paypalService: PaypalService
  ) { }
  ngOnInit() {
    this.paypalService.callFunction$.subscribe(() => {
      this.someFunction();
    });
    console.log(this.responsePaypal + "   eztour");
    
    console.log(this.myStepper);
  }

  register(): void {
    console.log("btn appeler");
    
    if (this.registerForm.valid) {
      this.eleveService.registerUser(this.registerForm.value).subscribe(
        response => {
          console.log('User registered successfully', response);
        },
        error => {
          console.error('Error registering user', error);
        }
      );
     }
  }

  someFunction() {
    this.paypalService.currentMessage.subscribe(message => this.responsePaypal = message);
    console.log('Function in Second Component triggered!');
    console.log("he mouiasss");
    
    console.log(this.responsePaypal);
    this.myStepper.next();  // Move to the next step
    // Ajoutez votre logique ici
  }

  onStepChange(event: StepperSelectionEvent) {
    if (event.selectedIndex === 2) {
      this.register();
    }
  }

  openDialog() {
    this.modalService.openWithData(ReglementComponent);
  }
}