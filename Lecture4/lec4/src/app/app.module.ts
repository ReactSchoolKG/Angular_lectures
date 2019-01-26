import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { PowerPipe } from './pipe/power.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    PowerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
