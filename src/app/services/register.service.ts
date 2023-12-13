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
private postAwsClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postAwsCluster.endpoint}`;
private postEksClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postEksCluster.endpoint}`;
private postDeleteEksClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postDeleteEksCluster.endpoint}`
private postGcpClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postGcpCluster.endpoint}`;
private postGkeClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postGkeCluster.endpoint}`;
private postDeleteAksClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postDeleteAksCluster.endpoint}`;
private postDeleteGkeClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postDeleteGkeCluster.endpoint}`;
private getAwsCrediantials = `${environment.api.baseUrl}${environment.api.routes.getAwsCredentials.endpoint}`;
private getAzureCrediantials = `${environment.api.baseUrl}${environment.api.routes.getAzureCredentials.endpoint}`;
private getGcpCrediantials = `${environment.api.baseUrl}${environment.api.routes.getGcpCredentials.endpoint}`;
private getAwsCluster = `${environment.api.baseUrl}${environment.api.routes.getAwsCluster.endpoint}`;
private getAzureCluster = `${environment.api.baseUrl}${environment.api.routes.getAzureCluster.endpoint}`;
private getGcpCluster = `${environment.api.baseUrl}${environment.api.routes.getGcpCluster.endpoint}`;


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

    postAwsCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postAwsClusterUrl,body);
    }

    postEksCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postEksClusterUrl,body);
    }

    postDeleteEksCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postDeleteEksClusterUrl,body);
    }

    postGcpCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postGcpClusterUrl,body);
    }

    postGkeCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postGkeClusterUrl,body);
    }

    postDeleteAksCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postDeleteAksClusterUrl,body);
    }

    postDeleteGkeCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postDeleteGkeClusterUrl,body);
    }

    getAwsCrediantial(): Observable<any>{
      return this.httpClient.get(this.getAwsCrediantials);
    }

    getAzureCrediantial(): Observable<any>{
      return this.httpClient.get(this.getAzureCrediantials);
    }

    getGcpCrediantial(): Observable<any>{
      return this.httpClient.get(this.getGcpCrediantials);
    }

    getAwsClusters(): Observable<any>{
      return this.httpClient.get(this.getAwsCluster);
    }

    getAzureClusters(): Observable<any>{
      return this.httpClient.get(this.getAzureCluster);
    }

    getGcpClusters(): Observable<any>{
      return this.httpClient.get(this.getGcpCluster);
    }

  }