import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";
import {Note} from "../../model/Note";
import {CalendarOptions, EventSourceInput} from '@fullcalendar/angular';
import { AuthService} from "../../service/auth/auth.service";
import { NotesService} from "../../service/notes/notes.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    height: 550,
    events: []
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends
  }

  constructor(private authService: AuthService,
              private notesService: NotesService) {
  }
  Events: any = [];
  day: string='';
  month: string='';

  ngOnInit() {
    this.notesService.getNotes().subscribe(
      (notes: Note[]) => {
        notes.forEach(note => {
          this.day = note?.doBefore?.day?.toString() ?? "";
          this.month = note?.doBefore?.month?.toString() ?? "";

          if (note?.doBefore?.day?.toString().length === 1) {
            this.day = '0' + note.doBefore?.day;
          }
          if (note?.doBefore?.month?.toString().length === 1) {
            this.month = '0' + note.doBefore?.month;
          }

          this.Events.push({
            title: note.title,
            date: `${note.doBefore?.year}-${this.month}-${this.day}`,
          });
        });
        this.calendarOptions.events = this.Events;
      })

      }

}
