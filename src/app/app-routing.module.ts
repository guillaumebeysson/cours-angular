import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "auth", component: AuthComponent },
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
