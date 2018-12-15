import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.myForm = formBuilder.group({
      'username' : ['', [Validators.required]],
      'password' : ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit()
  {
    this.http
      .post('http://localhost:3000', this.myForm.value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.log(err)
      )
    ;
  }

}
