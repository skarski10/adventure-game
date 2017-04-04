import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { routing } from './app.routing';
import { RulesComponent } from './rules/rules.component';
import { LevelsComponent } from './levels/levels.component';
import { Level2Component } from './level2/level2.component';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RulesComponent,
    LevelsComponent,
    Level2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
