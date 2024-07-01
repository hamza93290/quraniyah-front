import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  registerForm!: FormGroup;
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

  constructor(
    private router: Router,
    private authService: ElevesService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      age: ['', Validators.required],
      cursus: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]  // Assurez-vous que la valeur initiale est false
    });
  }

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
