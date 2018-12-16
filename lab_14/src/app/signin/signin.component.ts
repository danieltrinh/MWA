import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {TokenService} from '../token.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styles: [],
  providers: [AuthService]
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private auth: AuthService, private token:TokenService) {
    this.myForm = formBuilder.group({
      'username': ['aaa', [Validators.required]],
      'password': ['bbb', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.myForm.value)
      .subscribe(
        (token) => {
          this.token.saveToken(token.idToken);
        },
        (err) => console.log(err)
      )
    ;
  }

}
