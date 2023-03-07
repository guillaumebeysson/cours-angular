import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';
import { prenomValidator } from 'src/app/validators/prenom.validators';

@Component({
  selector: 'app-personne-reactive',
  templateUrl: './personne-reactive.component.html',
  styleUrls: ['./personne-reactive.component.css']
})
export class PersonneReactiveComponent implements OnInit{
  constructor(private ps: PersonneService) {}
  ngOnInit(): void {
    this.ps.getPersonnes().subscribe({
      next: value => {
        this.personnes = value;
      },
      error: (erreur) => {
        alert("Problème de récupération")
      }
    })
  }
  personne: Personne  = {adresses: []};
  personnes: Personne[] = []
  personneForm = new FormGroup({
    nom: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,20}$/)] }),
    prenom: new FormControl("", { nonNullable: true, validators: [Validators.required, prenomValidator] })
  })
  
  ajouterPersonne() {
    this.ps.addPersonne({...this.personneForm.value, adresses: []}).subscribe({
      next: value => {
        console.log(value);
        this.personnes.push(value);
        this.personne = { adresses: [] };
        this.personneForm.reset();
      },
      error: (erreur) => {
        alert("Problème d'insertion")
      }
    })
  }
}


