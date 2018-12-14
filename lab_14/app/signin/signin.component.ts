import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
