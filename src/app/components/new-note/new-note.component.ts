import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  text!: string;
  noSpecial: RegExp = /^[^<>*!]+$/;

  newNote = new FormGroup({
    title: new FormControl('',[Validators.required,
                                                    Validators.minLength(4)]),
    category: new FormControl('',[Validators.required,
                                                    Validators.minLength(4)]),
    text: new FormControl('', [Validators.required,
                                                    Validators.minLength(4)]),
  })
  constructor() {
  }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.newNote.value);
  }
}
