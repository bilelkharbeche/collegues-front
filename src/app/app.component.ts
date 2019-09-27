import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <div class="row">
    <div class="col" *ngIf="estConnecte===false;">        
        <app-authentification></app-authentification>
      </div>
    </div>
    <div *ngIf="estConnecte===true">
    <app-menu-component></app-menu-component>
      <router-outlet>        
      </router-outlet>  
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
