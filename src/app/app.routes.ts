import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GalerieComponent } from './galerie/galerie.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { DetailsComponent } from './details/details.component';
import { ConnexionGuard } from './connexionGuard';
import { AuthentificationComponent } from './authentification/authentification.component';



export const ROUTES: Routes = [
    { path: 'login', component: AuthentificationComponent },

    {
        path: '',
        canActivate: [ConnexionGuard],
        children: [
            { path: 'accueil', component: AccueilComponent },
            { path: 'galerie', component: GalerieComponent },
            { path: 'apropos', component: AProposComponent },
            { path: 'galerie/:matricule', component: DetailsComponent }
        ]
    }
];