import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { title } from 'process';
import {MovComponent} from './mov/mov.component'


const routes: Routes = [
  {path:'mov',component:MovComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
