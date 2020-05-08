import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestCComponent } from './rest-c/rest-c.component';
import { TableComponent } from './table/table.component';
import { DirectivesComponent } from './directives/directives.component';
import {BasicHighlightDirective} from "./directives/basic-highlight/basic-highlight.directive";
import {BetterHighlightDirective} from "./directives/better-highlight/better-highlight.directive";
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HeroesComponent } from './heroes/heroes.component';
import {ServerService} from "./server.service";

@NgModule({
  declarations: [
    AppComponent,
    RestCComponent,
    TableComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
