import { Component, OnInit } from '@angular/core';
import {Note} from "../../model/Note";

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})
export class ViewNoteComponent implements OnInit {

  Note: Note = {
    category: 'anuel',
    title: 'title',
    text: 'cambiar spr',
    created_date: '2020-12-05',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
