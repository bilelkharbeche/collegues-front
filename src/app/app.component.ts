import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col" *ngIf="estConnecte===false;">        
        <app-authentification></app-authentification>
      </div>
    </div>
    <div class="row" *ngIf="estConnecte===true">
      <div class="col">
        <app-recherche-collegue-par-nom></app-recherche-collegue-par-nom> 
      </div>
      <div class="col">
        <app-collegue></app-collegue>
      </div>      
    </div>
  </div>
  `, 
  styles: []
})
export class AppComponent {
  title = 'collegues-front'; 
  
  estConnecte: boolean;
  actionSub: Subscription;

  constructor(private dataService: DataService) {
    this.actionSub = this.dataService.actionEstCo.subscribe(result => this.estConnecte = result);    
  }

  ngOnDestroy() {     
    this.actionSub.unsubscribe();
  }
}
