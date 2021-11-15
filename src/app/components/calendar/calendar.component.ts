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
    events: [
      { title: 'event 1', date: '2021-11-01' },
      { title: 'event 2', date: '2021-11-05' }
    ]
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends
  }

  constructor(private authService: AuthService,
              private notesService: NotesService) {
  }
  Events: any = [];

  ngOnInit() {
    this.notesService.getNotes().subscribe(
      (notes: Note[]) => {
        notes.forEach(note => {
          this.Events.push({
            title: note.title,
            date: `${note.doBefore?.year}-${note.doBefore?.month}-${note.doBefore?.day}`,
          });
        });
        this.calendarOptions.events = this.Events;
      })

      }

}
