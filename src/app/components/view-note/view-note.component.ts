import { Component, OnInit } from '@angular/core';
import {Note} from "../../model/Note";
import {ActivatedRoute} from "@angular/router";
import {NotesService} from "../../service/notes/notes.service";
import {MessageService} from "primeng/api";
import {UpdateNote} from "../../model/UpdateNote";
import {ConfirmationService, ConfirmEventType} from 'primeng/api';
@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})
export class ViewNoteComponent implements OnInit {

  Note!: Note;

  constructor(private route: ActivatedRoute,
              private notesService: NotesService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.notesService.getNote(params.noteTitle).subscribe(note => {
        this.Note = note;
        console.log(note);
      });
    });
  }

  updateNote() {
    let updateNote = new UpdateNote((this.Note.text || ""), (this.Note.title || ""));
    this.notesService.updateNote(updateNote)
      .subscribe((data:any) => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: data.message});
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  confirm2() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
      },
      reject: (type: any) => {
        switch(type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
            break;
        }
      }
    });
  }
}
