import { Component, OnInit } from '@angular/core';
import {Note} from "../../../model/Note";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {


  Notes: Note[]= [
    {category: 'Electonics',
      title: 'papa',
      text: 'ir por papas',
      created_date: '12/12/12'},
    {category: 'CAR',
      title: 'cambiollanta',
      text: 'tengo qu cam',
      created_date: '12/12/12'},
    {category: 'tecla',
      title: 'teclear',
      text: 'teclatext',
      created_date: '12/12/12'},
    {category: 'tecla',
      title: 'teclear',
      text: 'teclatext',
      created_date: '12/12/12'},
    {category: 'tecla',
      title: 'teclear',
      text: 'teclatext',
      created_date: '12/12/12'},
    {category: 'tecla',
      title: 'teclear',
      text: 'teclatext',
      created_date: '12/12/12'}
  ];

  sortOptions!: SelectItem[];
  sortField!: string;
  sortOrder!: number;
  sortKey!: string;

  constructor() { }

  ngOnInit() {
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
