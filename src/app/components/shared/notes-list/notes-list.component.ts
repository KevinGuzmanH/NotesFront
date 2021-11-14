import { Component, OnInit } from '@angular/core';
import {Note} from "../../../model/Note";
import {MenuItem, SelectItem} from "primeng/api";
import {MessageService} from "primeng/api";
import {NotesService} from "../../../service/notes/notes.service";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  items!: MenuItem[];

  Notes!: Note[];

  sortOptions!: SelectItem[];
  sortField!: string;
  sortOrder!: number;
  sortKey!: string;

  constructor(private messageService: MessageService,
              private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(
      (data) => {
        this.Notes = data;
      }
    );
    this.sortOptions = [
      {label: 'Newest First', value: '!title'},
      {label: 'Oldest First', value: 'title'},
      {label: 'Brand', value: 'text'}
    ];

  }


  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  selectCar($event: MouseEvent, car: any) {

  }

}
