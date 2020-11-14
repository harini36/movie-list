import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovComponent} from './mov/mov.component';
import { MovdetailsComponent } from './movdetails/movdetails.component';
import{HeaderComponent} from './header/header.component';


const routes: Routes = [
  {path:'',redirectTo:'./mov',pathMatch:'full'},
  {path:'mov',component:MovComponent},
  {path:'mov',component:HeaderComponent},
  {path:'mov/:title',component:MovdetailsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
