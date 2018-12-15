import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [],
  providers:[HttpClient]
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.myForm = formBuilder.group({
      'firstname': ['Daniel', [
        Validators.required
      ]],
      'lastname': ['Trinh', [
        Validators.required
      ]],
      'email': ['abc@gmail.comg',
        Validators.required,
        this.asyncEmailValidator
      ],
      'userPassword': formBuilder.group({
          'password': ['abc', [
            Validators.required
          ]],
          'confirmPassword': ['abc', [
            Validators.required
          ]]
        },
        {
          asyncValidator: this.asyncMatchingPasswordValidator.bind(this)
        }
      ),
    });

    // this.myForm.valueChanges.subscribe(
    //   (data: any) => console.log(data)
    // );
  }

  ngOnInit() {
  }

  asyncEmailValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'abc@gmail.com') {
            console.log(control.value);
            resolve(null);
          } else {
            console.log('email ok');
            resolve(null);
          }
        }, 1500);
      }
    );
  }

  onSubmit() {
    this.http.post('http://localhost:3000/api/signup',
      this.myForm.value
    ).subscribe((res) => {
        console.log(res);
      },
      (error) => {
        console.log('error occurred');
      }
    );
  }


  asyncMatchingPasswordValidator(userPassword: FormGroup): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {

        let pass = userPassword.controls.password.value;
        let repeatPass = userPassword.controls.confirmPassword.value;

        if (repeatPass.length <= 0)
          resolve(null);

        if (pass === repeatPass) {
          console.log('matched');
          resolve(null);
        } else {
          console.log('unmatch');
          resolve({'unmatched': true});
        }
      }, 1500);
    });
  }
}
