import { Component, OnInit } from '@angular/core';
import { tabMatricules } from '../mock/matricules.mock'
import { DataService} from '../services/data.service'

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html' 
})
export class RechercheCollegueParNomComponent implements OnInit {

  tabMatricules: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  rechercherMat(nom: string) {
    this.tabMatricules = this.dataService.rechercherParNom(nom);
  }

}
