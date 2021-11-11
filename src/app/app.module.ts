import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {KeyFilterModule} from 'primeng/keyfilter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {InputTextModule} from 'primeng/inputtext';
import { AuthNavbarComponent } from './components/shared/auth-navbar/auth-navbar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from "primeng/dropdown";

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NotesListComponent } from './components/shared/notes-list/notes-list.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import {EditorModule} from 'primeng/editor';
import { ProfileComponent } from './components/profile/profile.component';
import { DarkModeToggleComponent } from './components/shared/dark-mode-toggle/dark-mode-toggle.component';
import { ViewNoteComponent } from './components/view-note/view-note.component';
import {CookieService} from "ngx-cookie-service";

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    AuthNavbarComponent,
    SignUpComponent,
    SignInComponent,
    NewNoteComponent,
    NotesListComponent,
    SideBarComponent,
    CalendarComponent,
    ProfileComponent,
    DarkModeToggleComponent,
    ViewNoteComponent,
  ],
  imports: [
    FullCalendarModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    KeyFilterModule,
    CardModule,
    EditorModule,
    AutoCompleteModule,
    DataViewModule,
    FormsModule,
    DropdownModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
