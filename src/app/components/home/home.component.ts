import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'cours-angular';
  
  maDate = Date.now()
  formation = { nombreJours: 5, nombreStagiaires: 10, intitule: 'Angular' }
  tableau = [10, 12, 11]
  direBonjour(){
    alert("bonjour");
  }
}
