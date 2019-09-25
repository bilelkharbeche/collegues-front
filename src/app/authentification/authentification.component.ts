import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
})
export class AuthentificationComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  connexion(email:string, mdp:string) {
        this.dataService.connexion(email, mdp);        
  }

}
