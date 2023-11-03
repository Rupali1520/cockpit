import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
private postUserRegister = `${environment.api.baseUrl}${environment.api.routes.registerUser.endpoint}`;

  constructor(private httpClient: HttpClient) {}

    postRegister(body:any): Observable<any>{
      return this.httpClient.post(this.postUserRegister,body);
    }
  }