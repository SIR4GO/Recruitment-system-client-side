import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private  http:HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({'content-type':'application/json'})
  };

  getCandidate(token):Observable<any>
  {
    const cardinality = {
      token: token
    };
    return this.http.post('http://localhost:3000/get-candidate' , cardinality , this.httpOptions);
  }


  addApplied(jobId , candidateId):Observable<any>
  {
    const applied = {
       job_id: jobId,
       candidate_id: candidateId
    };
    return this.http.post('http://localhost:3000/add-applied' , applied , this.httpOptions);
  }

  updateCandidateByCv(cv , candidateId):Observable<any>
  {
    const candidate = {
      cv: cv,
      id: candidateId
    };
    return this.http.post('http://localhost:3000/update-candidate' , candidate , this.httpOptions);
  }

}
