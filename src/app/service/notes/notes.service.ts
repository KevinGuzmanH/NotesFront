import {HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Note} from "../../model/Note";
import {UpdateNote} from "../../model/UpdateNote";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  URL = 'https://notesbackapi.herokuapp.com/Notes/V1';
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

  updateNote(updateNote: UpdateNote) {
    return this.Client.post(this.URL + '/updateNote',updateNote,{withCredentials: true});
  }

  getCategoryNotes() {
    return this.Client.get(this.URL + '/getNoteCategories',{withCredentials: true});
  }

  deleteNote(title: string) {
    return this.Client.delete(this.URL + '/deleteNote/'+title,{withCredentials: true,headers: {'Content-Type': 'application/json'}});
  }
}
