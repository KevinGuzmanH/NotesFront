import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required,
                                                    Validators.minLength(4),
                                                    Validators.maxLength(20)]),
    last_name: new FormControl('', [Validators.required,
                                                         Validators.minLength(4),
                                                         Validators.maxLength(20)]),
    username: new FormControl('', [Validators.required,
                                                        Validators.minLength(4),
                                                        Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required,
                                                        Validators.minLength(4),
                                                        Validators.maxLength(20)]),
  });
  constructor(private authentication:AuthService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {}

  signUp() {
    this.authentication.SignUp(this.signUpForm.value).subscribe(
      (data) => {
        this.router.navigate(['/signin']);
      },
      (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:error.error.error});
      }
    )
  }
}
