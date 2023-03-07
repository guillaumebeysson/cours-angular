import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './components/personne/personne.component';
import { ObservableComponent } from './components/observable/observable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonneReactiveComponent } from './components/personne-reactive/personne-reactive.component';
import { PersonneDetailsComponent } from './components/personne-details/personne-details.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    ObservableComponent,
    PersonneReactiveComponent,
    PersonneDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
