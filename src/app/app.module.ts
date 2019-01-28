import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PDataTableComponent } from './p-data-table/p-data-table.component';
import { PipeDataTablePipe } from './_pipes/pipe-data-table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PDataTableComponent,
    PipeDataTablePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
