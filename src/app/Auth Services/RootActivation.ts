import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HrService} from '../Services/hr.service';

@Injectable({
  providedIn: 'root'
})
export class RootActivationService implements CanActivate{

  constructor(private route: Router , private hrService: HrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


    if(state.url === '/dashboard')
    {
      this.route.navigate(['']);  // prevent access parent component alone without child
      return false;
    }
    if(state.url === '/signup')
    {
      this.route.navigate(['/signup/author']);  // make default child route /author for parent route /signup
      return false;
    }

    if(state.url.includes('/dashboard/hr') )
    {
       const token = localStorage.getItem('token');
       if(token !== undefined)
       {
          this.hrService.getHr(token).subscribe((result) =>{
                  if(result.message.includes('hr found'))
                        return true;
                  else if(result.message.includes('not found hr'))
                      this.route.navigate(['/']);

          }, error =>{
                  this.route.navigate(['/']);
          });
       }
    }

    return true;
  }
}
