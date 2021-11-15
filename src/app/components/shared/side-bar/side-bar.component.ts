import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  visibleSidebar1: boolean = false;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  SignOut(){
    this.cookieService.deleteAll();
  }
}
