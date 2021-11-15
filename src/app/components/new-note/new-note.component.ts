import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotesService} from "../../service/notes/notes.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {NotesListComponent} from "../shared/notes-list/notes-list.component";

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
    doBefore: new FormControl('', [Validators.required]),
  })
  constructor(private NoteService: NotesService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onsubmit(){
    this.newNote.value.doBefore = this.newNote.value.doBefore.getTime();

    this.NoteService.addNote(this.newNote).subscribe(
      (data) => {
        window.location.reload();
      },
      (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:error.error.error});
      }
    )
  }


}
