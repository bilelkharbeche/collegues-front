import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GalerieComponent } from './galerie/galerie.component';
import { AProposComponent } from './a-propos/a-propos.component';



export const ROUTES: Routes = [ 
    { path: 'accueil', component: AccueilComponent},
    { path: 'galerie', component: GalerieComponent},
    { path: 'aPropos', component: AProposComponent}
];