import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';
import { PersonneComponent } from './components/personne/personne.component';

const routes: Routes = [
  { path: "personne", component: PersonneComponent},
  { path: "observable", component: ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
