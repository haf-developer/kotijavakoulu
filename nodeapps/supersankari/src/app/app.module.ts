import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LomakeComponent } from './lomake/lomake.component';
import { TuloksetComponent } from './tulokset/tulokset.component';

import { HttpModule } from '@angular/http';

import { MatButtonModule, MatInputModule, MatRadioModule, MatCardModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LomakeComponent,
    TuloksetComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
