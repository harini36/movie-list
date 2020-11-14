import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovComponent } from './mov/mov.component';
import { FormsModule } from '@angular/forms';
import { MovdetailsComponent } from './movdetails/movdetails.component';
import { HeaderComponent } from './header/header.component';

import{HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MovComponent,
    MovdetailsComponent,
    HeaderComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
