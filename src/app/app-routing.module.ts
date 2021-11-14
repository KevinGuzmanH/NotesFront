import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {NewNoteComponent} from "./components/new-note/new-note.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ViewNoteComponent} from "./components/view-note/view-note.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: 'signin',component: SignInComponent},
  {path: 'signup',component: SignUpComponent},
  {path: 'newNote',component: NewNoteComponent,canActivate: [AuthGuard]},
  {path: 'calendar',component: CalendarComponent,canActivate: [AuthGuard]},
  {path: 'profile',component: ProfileComponent},
  {path: 'view/:noteTitle',component: ViewNoteComponent,canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'signin', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
