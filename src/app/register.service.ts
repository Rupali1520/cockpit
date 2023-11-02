import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) {}
    getRegister(): Observable<any>{
      const body = {
        "username": "user9876",
        "email": "user9876@gmail.com",
        "password": "password",
        "confirm_password": "password"
      };
      return this.httpClient.post('http://50.17.59.150:4000/jsonRegister',body);
    }
  }