import {Component, OnInit, ViewChild} from '@angular/core';
import {Note} from "../../../model/Note";
import {MenuItem, SelectItem} from "primeng/api";
import {MessageService} from "primeng/api";
import {NotesService} from "../../../service/notes/notes.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  items!: MenuItem[];

  Notes!: Note[];

  sortOptions: SelectItem[]=[];
  sortField!: string;
  sortOrder!: number;
  sortKey!: string;
  loading: boolean = true;

  constructor(private messageService: MessageService,
              private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(
      (data) => {
        this.loading = false;
        this.Notes = data;
      }
    );
    this.notesService.getCategoryNotes().subscribe(
      (data:any) => {
        //push sortOptions with data.name
        for (let i = 0; i < data.length; i++) {
          this.sortOptions.push({label: data[i].name, value: '!category'});
        }
      }
    );

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



}
