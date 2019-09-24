import { Component } from '@angular/core';
import { newColl } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
    <div class="col">
        <app-recherche-collegue-par-nom></app-recherche-collegue-par-nom> 
      </div>
      <div class="col">
        <app-collegue></app-collegue>
      </div>      
  </div>    
  `, 
  styles: []
})
export class AppComponent {
  title = 'collegues-front';  
}
