import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss']
})
export class AuthNavbarComponent implements OnInit {

  @Input()
  page!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
