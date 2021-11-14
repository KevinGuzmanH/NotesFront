import {HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Note} from "../../model/Note";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  URL = 'http://localhost:4000/Notes/V1';
  Client: HttpClient;

  constructor(HttpClient: HttpClient) {
    this.Client = HttpClient;
  }

  addNote(formGroup: FormGroup):Observable<Note> {
    return this.Client.post<Note>(this.URL + '/addNote', formGroup.value,{withCredentials: true});
  }

  getNotes():Observable<Note[]> {
    return this.Client.get<Note[]>(this.URL + '/getNotes',{withCredentials: true});
  }

  getNote(title: string):Observable<Note> {
    return this.Client.get<Note>(this.URL + '/getNote/' + title,{withCredentials: true});
  }

  updateNote(updateNote:JSON):Observable<Note> {
    return this.Client.post<Note>(this.URL + '/updateNote',updateNote,{withCredentials: true});
  }
}