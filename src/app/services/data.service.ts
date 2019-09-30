import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
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

  constructor(private _http: HttpClient) { }

  get actionEstCo() {
    return this.estConnecte.asObservable();
  }

  get actionInfoColl() {
    return this.infoColl.asObservable();
  }

  connexion(email: string, mdp: string): Observable<void | object> {
    const URL_BACKEND = environment.backendUrl + '/auth';

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true
    };

    return this._http.post(URL_BACKEND,
      {
        email: email,
        motDePasse: mdp
      },
      httpOptions
    )
      .pipe(
        tap(data => { this.estConnecte.next(true) }))
  }


  valideCreerColl(coll: Collegue) {
    const URL_BACKEND = environment.backendUrl + '/collegues';

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true
    };

    return this._http.post(URL_BACKEND, {
      nom: coll.nom,
      prenoms: coll.prenoms,
      dateDeNaissance: coll.dateDeNaissance,
      email: coll.email,
      photoUrl: coll.photoUrl
    },
      httpOptions
    );
  }

  valideModif(coll: Collegue) {
    const URL_BACKEND = environment.backendUrl + '/collegues/' + coll.matricule;

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true
    };

    return this._http.patch(URL_BACKEND, {
      email: coll.email,
      photoUrl: coll.photoUrl
    },
      httpOptions
    );
  }

  rechercherParNom(nom: string): Observable<string[]> {
    const URL_BACKEND = environment.backendUrl + '/collegues?nom=' + nom;

    return this._http.get<string[]>(URL_BACKEND, { withCredentials: true });
  }

  recupererCollegueCourant(matricule: string): Observable<Collegue> {
    const URL_BACKEND = environment.backendUrl + '/collegues/' + matricule;

    return this._http.get<Collegue>(URL_BACKEND, { withCredentials: true }).pipe(
      tap(infos => {
        this.infoColl.next(infos);
      })
    );
  }

  afficherPhoto(): Observable<Collegue[]> {
    const URL_BACKEND = environment.backendUrl + '/collegues/photos';

    return this._http.get<Collegue[]>(URL_BACKEND, { withCredentials: true });
  }

  isLoggedIn(): Observable<string> {
    const URL_BACKEND = environment.backendUrl + '/auth/user';

    return this._http.get(URL_BACKEND, { withCredentials: true, responseType: 'text' });
  }
}
