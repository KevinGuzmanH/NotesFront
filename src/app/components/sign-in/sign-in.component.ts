import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required,
                                                        Validators.minLength(5),
                                                        Validators.maxLength(10)]),
    password: new FormControl('',[Validators.required,
                                                       Validators.minLength(6),
                                                       Validators.maxLength(20)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.signInForm.value);
  }
}
