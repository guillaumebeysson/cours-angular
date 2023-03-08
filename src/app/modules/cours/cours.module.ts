import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { ObservableComponent } from './observable/observable.component';
import { PersonneComponent } from './personne/personne.component';
import { PersonneReactiveComponent } from './personne-reactive/personne-reactive.component';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';
import { PersonneReactiveDetailsComponent } from './personne-reactive-details/personne-reactive-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ObservableComponent,
    PersonneComponent,
    PersonneReactiveComponent,
    PersonneDetailsComponent,
    PersonneReactiveDetailsComponent,
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CoursModule { }
