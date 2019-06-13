import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private  http:HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({'content-type':'application/json'})
  };

  addJob(title , description , requirement , date , hrId):Observable<any>
  {
    const job = {
      title: title,
      description: description,
      requirement:requirement,
      date:date,
      hr_id: hrId
    };

    return this.http.post('http://localhost:3000/add-job' , job , this.httpOptions);
  }

  findAllJobs()
  {
    return this.http.post('http://localhost:3000/get-jobs' , this.httpOptions);
  }

}
