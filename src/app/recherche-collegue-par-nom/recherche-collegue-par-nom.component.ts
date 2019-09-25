import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html' 
})
export class RechercheCollegueParNomComponent implements OnInit {

  tabMatricules: string[] = [];
  newColl: Collegue;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  rechercherMat(nom: string) {
   this.dataService.rechercherParNom(nom).subscribe(tab => this.tabMatricules = tab);
  }

  rechercherColl(matricule: string) {
    this.dataService.recupererCollegueCourant(matricule).subscribe(coll => this.newColl = coll);
  }

}
