import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from '../plan/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private http:HttpClient) { }
  
  createPlan(data: any): Observable<any>{
    return this.http.post('http://localhost:3000/posts',data);
  }
  getPlan(): Observable<any>{
    return this.http.get('http://localhost:3000/posts');
  }
}
