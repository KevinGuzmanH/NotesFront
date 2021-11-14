import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotesService} from "../../service/notes/notes.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  text!: string;

  newNote = new FormGroup({
    title: new FormControl('',[Validators.required,
                                                    Validators.minLength(4)]),
    category: new FormControl('',[Validators.required,
                                                    Validators.minLength(4)]),
    text: new FormControl('', [Validators.required,
                                                    Validators.minLength(4)]),
  })
  constructor(private NoteService: NotesService,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  onsubmit(){
    this.NoteService.addNote(this.newNote).subscribe(
      (data) => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Note added'});
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
