import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html'  
})
export class CollegueComponent implements OnInit {

  collegue: Collegue;
  affichage: boolean = true;

  constructor(private datatService: DataService) { }

  ngOnInit() {
    this.collegue = this.datatService.recupererCollegueCourant();    
  }

  modifColl() {
    console.log("Modification du collègue et oublie pas T MAUCH");
    this.affichage = false;
  }

  creerColl() {
    console.log("Création d'un nouveau collègue MAUCH");
  }

  valideModif() {
    console.log("Modification validée");
    this.affichage = true;
  }
}
