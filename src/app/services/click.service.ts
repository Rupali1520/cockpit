import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClickService {
  jobId: any;
  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post<any>(`http://98.70.13.238:4000/json-recentjoblogs-azure?job_id=${this.jobId}`, data);
  }
}
