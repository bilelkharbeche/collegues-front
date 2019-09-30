import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  collegue: Collegue;

  actionSub: Subscription;
  tabCol: Collegue[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.actionSub = this.dataService.afficherPhoto().subscribe(tab => this.tabCol = tab);
  }

  rechercherColl(matricule: string) {
    this.dataService.recupererCollegueCourant(matricule).subscribe(coll => this.collegue = coll);
  }

}
