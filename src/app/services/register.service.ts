import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
private postUserRegister = `${environment.api.baseUrl}${environment.api.routes.registerUser.endpoint}`;
private loginUser = `${environment.api.baseUrl}${environment.api.routes.loginUser.endpoint}`;
private postAzureClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postAzureCluster.endpoint}`;
private postAksClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postAksCluster.endpoint}`;

  constructor(private httpClient: HttpClient) {}

    postRegister(body:any): Observable<any>{
      return this.httpClient.post(this.postUserRegister,body);
    }

    login(body:any): Observable<any>{
      return this.httpClient.post(this.loginUser,body);
    }

    postAzureCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postAzureClusterUrl,body);
    }

    postAksCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postAksClusterUrl,body);
    }
  }