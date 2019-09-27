import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html'  
})
export class CollegueComponent implements OnInit {

  collegue: Collegue = new Collegue('', '','', null, '');
  error: string;

  affichageDefault: boolean = true;
  affichageModif: boolean = false;
  affichageCrea: boolean = false;  
  
  actionSub: Subscription;

  constructor(private datatService: DataService) { }

  ngOnInit() {
    this.actionSub = this.datatService.actionInfoColl.subscribe(result => {
     if(result) {
      this.collegue = result;
     }
    });
  }

  modifColl() {
    this.affichageDefault = false;
    this.affichageModif = true;
    this.affichageCrea = false;
  }

  creerColl() {
    this.affichageDefault = false;
    this.affichageModif = false;
    this.affichageCrea = true; 

    this.collegue = new Collegue('', '', '', null, '');
  }

  validCreerColl(nom: string, prenoms: string, dateNaiss: Date, email: string, photoUrl: string) {
    this.collegue = new Collegue(nom, prenoms, email, new Date(dateNaiss), photoUrl);

    this.datatService.valideCreerColl(this.collegue)
    .subscribe(result => {
    this.affichageDefault = true;
    this.affichageModif = false;
    this.affichageCrea = false;  
    }, (err: any) =>{
      this.error = err.error.message;
    });  
  }

  valideModif(coll: Collegue) {
    this.datatService.valideModif(coll)
    .subscribe(result => {
      this.affichageDefault = true;
      this.affichageModif = false;
      this.affichageCrea = false;
    }, (err: any) =>{        
        this.error = err.error.message;
    });    
  }
}
