import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { tabMatricules } from '../mock/matricules.mock';
import { newColl } from '../mock/collegues.mock';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http"; 
import { EMPTY_PARSE_LOCATION } from '@angular/compiler';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public tabMatricules: string[];
  public collegue: Collegue;

  private estConnecte = new BehaviorSubject(false);
  private infoColl = new BehaviorSubject(this.collegue);

  constructor(private _http:HttpClient) { }

  get actionEstCo() {
    return this.estConnecte.asObservable();
  }

  get actionInfoColl() {
    return this.infoColl.asObservable();
  }

  connexion(email: string, mdp: string) {
    const URL_BACKEND = environment.backendUrl + '/auth';

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true
    };

    this._http.post(URL_BACKEND,
      {
        email: email,
        motDePasse: mdp
      },

      httpOptions
    )
    .subscribe((data:any) => {
      this.estConnecte.next(true);
    }, (error: HttpErrorResponse) => {
      console.log("error", error);
    });
  }

  rechercherParNom(nom: string): Observable<string[]> {
    const URL_BACKEND = environment.backendUrl + '/collegues?nom=' + nom;

    return this._http.get<string[]>(URL_BACKEND, { withCredentials: true});
  }

  recupererCollegueCourant(matricule: string): Observable<Collegue> {
    const URL_BACKEND = environment.backendUrl + '/collegues/' + matricule;
    
    return this._http.get<Collegue>(URL_BACKEND, { withCredentials: true }).pipe(
      tap(infos => {
        this.infoColl.next(infos);
        console.log(infos);
      })
    );
  }

}
