import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../service/auth/auth.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required,
                                                        Validators.minLength(4),
                                                        Validators.maxLength(20)]),
    password: new FormControl('',[Validators.required,
                                                       Validators.minLength(4),
                                                       Validators.maxLength(20)])
  });

  constructor(private cookieService: CookieService,
              private authentication:AuthService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {
  }

  SignIn() {
    this.authentication.SignIn(this.signInForm).subscribe(
      (data:any) => {
        this.cookieService.set('SESSIONID', data.hash, 1, '/', 'https://noteskeviny.netlify.app',true, 'None');
        this.cookieService.set('USERNAME', data.username, 1, '/', 'https://noteskeviny.netlify.app',true, 'None');
        this.router.navigate(['/calendar']);

      },error => {
        this.messageService.add({severity:'error', summary:'Error', detail:error.error.error});
      }
    )
  }
}
