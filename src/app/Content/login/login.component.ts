import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  constructor(public formbuilder: FormBuilder){}
  ngOnInit():void{
    this.initForm()
  }
  initForm(){
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
    })
  }

  OnSubmit(){
    console.log(this.form.value)
  }
  
}