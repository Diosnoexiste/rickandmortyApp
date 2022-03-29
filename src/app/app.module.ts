import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CardComponent } from './card/card.component';
import { RickapiService } from './rickapi.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CardComponent,
    DetailComponent,
    PagenotfoundComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RickapiService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,  
    NO_ERRORS_SCHEMA
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
