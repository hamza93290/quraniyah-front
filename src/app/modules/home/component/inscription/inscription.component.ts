import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElevesService } from '@core/services/eleves/eleves.service';

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


  foods: Food[] = [
    {value: 'Arabe', viewValue: 'Arabe'},
    {value: 'Coran', viewValue: 'Coran'},
    {value: 'ArabeCoran', viewValue: 'Arabe et Coran'},
  ];

  public emailRegExp: RegExp = /^[a-zA-Z](?:[a-zA-Z\d]*[-._]?[a-zA-Z\d]+)@[a-zA-Z\d]+[-._]?[a-zA-Z\d]+\.[a-zA-Z]{2,3}$/;

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
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    console.log('etas');
    
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
}