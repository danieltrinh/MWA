import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  myForm : FormGroup;
  constructor(private formBuilder : FormBuilder) {
    this.myForm = formBuilder.group({
      'firstname': ['Daniel', [
        Validators.required
      ]],
      'lastname' : ['Trinh', [
        Validators.required
      ]],
      'email' : ['abc@gmail.comg', [
        Validators.required,
        this.asyncEmailValidator
      ]],
      'password' : ['123', [
        Validators.required
      ]],
      'confirmPassword' : ['123', [
        Validators.required
      ]]
    });

    this.myForm.valueChanges.subscribe(
      (data:any) => console.log(data)
    );
  }

  ngOnInit() {
  }

  asyncEmailValidator(control: FormControl) : Promise<any> | Observable<any>{
    return new Promise<any>(
      (resolve, reject) => {
        setTimeout(()=> {
            if (control.value === 'abc@gmail.com')
            {
              console.log(control.value);
              resolve({'invalid' : true});
            }
            else{
              resolve(null);
            }
          }, 1500);
      }
    );
  }

}
