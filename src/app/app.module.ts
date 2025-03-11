import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // WorkoutFormComponent,
    // WorkoutListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkoutFormComponent,
    WorkoutListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
