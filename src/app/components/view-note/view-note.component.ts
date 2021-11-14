import { Component, OnInit } from '@angular/core';
import {Note} from "../../model/Note";
import {ActivatedRoute} from "@angular/router";
import {NotesService} from "../../service/notes/notes.service";

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})
export class ViewNoteComponent implements OnInit {

  Note!: Note;

  constructor(private route: ActivatedRoute,
              private notesService: NotesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.notesService.getNote(params.noteTitle).subscribe(note => {
        this.Note = note;
        console.log(note);
      });
    });
  }

  updateNote() {
    this.notesService.updateNote(JSON.parse(`{ "text": "${this.Note.text}" , "title": "${this.Note.title}" }`)).subscribe(note => {
      this.Note = note;
    });
  }

}
