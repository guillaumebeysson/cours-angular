import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObservableComponent } from './modules/cours/observable/observable.component';
import { PersonneDetailsComponent } from './modules/cours/personne-details/personne-details.component';
import { PersonneReactiveDetailsComponent } from './modules/cours/personne-reactive-details/personne-reactive-details.component';
import { PersonneReactiveComponent } from './modules/cours/personne-reactive/personne-reactive.component';
import { PersonneComponent } from './modules/cours/personne/personne.component';
import { CamionComponent } from './modules/vehicule/camion/camion.component';
import { VoitureComponent } from './modules/vehicule/voiture/voiture.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'vehicule', 
    loadChildren: () => import('./modules/vehicule/vehicule.module')
    .then(m => m.VehiculeModule)
  },
  { path: "cours",
    loadChildren: () => import('./modules/cours/cours.module')
    .then(m => m.CoursModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
