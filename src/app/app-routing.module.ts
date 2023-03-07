import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';
import { PersonneReactiveComponent } from './components/personne-reactive/personne-reactive.component';
import { PersonneComponent } from './components/personne/personne.component';

const routes: Routes = [
  { path: "personne", component: PersonneComponent },
  { path: "personne-reactive", component: PersonneReactiveComponent },
  { path: "observable", component: ObservableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
