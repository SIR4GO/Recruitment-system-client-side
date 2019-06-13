import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import {SocialUser} from 'angular-6-social-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'content-type':'application/json'})
  };


  constructor(private http: HttpClient ) { }



  typicalRegister(name , email , password , role):Observable<any>
  {
    const user = {
      name: name,
      email: email,
      password:password
    };


    if(role.includes('hr'))
      return this.http.post('http://localhost:3000/register-hr' , user , this.httpOptions);

    if(role.includes('candidate')){
      return this.http.post('http://localhost:3000/register-candidate' , user , this.httpOptions);
    }

  }

  typicalLogin(email , password , role):Observable<any>
  {
    const user = {
      email: email,
      password:password,
    };


    if(role.includes('hr'))
      return this.http.post('http://localhost:3000/login-hr' , user , this.httpOptions);

    if(role.includes('candidate')){
      return this.http.post('http://localhost:3000/login-candidate' , user , this.httpOptions);
    }

  }




  SignUpSocialUser(role  , socialUser: SocialUser): Observable<any>{

    const user = {
      email: socialUser.email,
      name: socialUser.name,
      provider: socialUser.provider,
      role: role,
      password:socialUser.id,
      image: socialUser.image,
      id: socialUser.id,
    };

    if(role.includes('hr'))
      return this.http.post('http://localhost:3000/register-hr' , user , this.httpOptions);

    if(role.includes('candidate'))
      return this.http.post('http://localhost:3000/register-candidate' , user , this.httpOptions);

  }


  loginSocialUser( role  , socialUser: SocialUser): Observable<any>{


    const user = {
      email: socialUser.email,
      name: socialUser.name,
      provider: socialUser.provider,
      role: role,
      password:socialUser.id,
      image: socialUser.image,
      id: socialUser.id,
    };

    if(role.includes('hr'))
      return this.http.post('http://localhost:3000/login-hr' , user , this.httpOptions);

    if(role.includes('candidate'))
      return this.http.post('http://localhost:3000/login-candidate' , user , this.httpOptions);

  }

}
