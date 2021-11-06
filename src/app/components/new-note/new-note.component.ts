import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  products: Object[]= [
    {name: 'Product 1', category: 'Category 1', price: '$1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.'},
    {name: 'Product 2', category: 'Category 2', price: '$2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.'},];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;
  sortKey: any;

  constructor() { }

  ngOnInit() {

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];
  }


  onSortChange($event: any) {
    
  }

  selectCar($event: MouseEvent, car: any) {
    
  }
}
