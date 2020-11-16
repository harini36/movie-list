import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovComponent } from './mov/mov.component';
import { FormsModule } from '@angular/forms';
import { MovdetailsComponent } from './movdetails/movdetails.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { ListdetailsComponent } from './listdetails/listdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    MovComponent,
    MovdetailsComponent,
    HeaderComponent,
    ListComponent,
    ListdetailsComponent,
   
  
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
