import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Note} from "../../model/Note";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'http://localhost:4000/security/V1';
  Client: HttpClient;
  private authorized: boolean = false;

  constructor(Client: HttpClient) {
    this.Client = Client;
  }

  SignUp(cledentials: FormGroup) {
    return this.Client.post(this.URL + '/signUp', cledentials);
  }

  SignIn(cledentials: FormGroup) {
    return this.Client.post(this.URL + '/signIn',null ,{headers: {'username': cledentials.value.username,
                                                                                                 'password': cledentials.value.password,
                                                                                                 'Content-Type': 'application/json'}});
  }

  checkHash():Observable<boolean> {
    return this.Client.get<boolean>(this.URL + '/checkHash',{withCredentials: true});
  }

}
