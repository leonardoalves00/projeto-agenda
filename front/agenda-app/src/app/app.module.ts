import { ContatoService } from './contato.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContatoComponent } from './contato/contato.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [
    ContatoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
