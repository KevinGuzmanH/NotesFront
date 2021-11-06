import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {NewNoteComponent} from "./components/new-note/new-note.component";

const routes: Routes = [
  {path: 'signin',component: SignInComponent},
  {path: 'signup',component: SignUpComponent},
  {path: 'newNote',component: NewNoteComponent},
  {path: '*', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
