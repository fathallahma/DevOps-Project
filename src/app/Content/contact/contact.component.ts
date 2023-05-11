import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  form: FormGroup = new FormGroup({})
  constructor( public formbuilder: FormBuilder){}
  ngOnInit():void{
    this.initForm()

  }
  initForm(){
    this.formbuilder.group({
      email:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            /^[a-zA-ZÀ-ÿ0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ]


    })
  }
  OnSubmit(){
    console.log(this.form.value)
  }

}
