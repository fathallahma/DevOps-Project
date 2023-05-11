import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  constructor(public formbuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = this.formbuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            /^[a-zA-ZÀ-ÿ0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
          ),
          Validators.minLength(8),
        ],
      ],
      confirmPassword: ['', [Validators.required]]
    });
  }
  OnSubmit(){
    console.log(this.form.value)
  }
}
