import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { tabMatricules } from '../mock/matricules.mock';
import { newColl } from '../mock/collegues.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public tabMatricules: string[];
  public collegue: Collegue;

  constructor() { }

  rechercherParNom(nom: string): string[] {
    // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.  
    return tabMatricules;
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return newColl;
  }

}
