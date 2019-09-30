import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DataService } from './services/data.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ConnexionGuard implements CanActivate {
    
    constructor(private router: Router, private dataService: DataService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean|UrlTree> {

        return this.dataService.isLoggedIn().pipe(
            map(() => {return true})
            ,catchError((err)=>{ return of(this.router.parseUrl('/login'))}),
            tap(result => console.log('result:', result)));  
    }   
}