import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  affichage: boolean = true;

  constructor() { }

  ngOnInit() {
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
  }
}
