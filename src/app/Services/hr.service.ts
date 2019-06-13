import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private  http:HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({'content-type':'application/json'})
  };

  getHr(token):Observable<any>
  {
    const cardinality = {
       token: token
    };
    return this.http.post('http://localhost:3000/get-hr' , cardinality , this.httpOptions);
  }

}
