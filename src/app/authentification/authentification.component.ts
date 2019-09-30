import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
})
export class AuthentificationComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  connexion(email: string, mdp: string) {
    this.dataService.connexion(email, mdp).subscribe(() => {
      this.router.navigate(['accueil']);
    })
  }
}
