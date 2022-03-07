import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Password: new FormControl(''),
    rePassword: new FormControl(''),
    Country: new FormControl(''),
    Age: new FormControl(''),
    Gender: new FormControl(''),
    Phone: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }
  resgisterUser(e) {
    console.log('submit', e);

  }

}
