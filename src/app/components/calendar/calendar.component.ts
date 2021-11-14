import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";
import {Note} from "../../model/Note";
import { CalendarOptions } from '@fullcalendar/angular';
import { AuthService} from "../../service/auth/auth.service";

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

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    console.log(this.authService.checkHash());
  }
}
