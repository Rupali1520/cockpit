import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../services/register.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cluster-jobs',
  templateUrl: './cluster-jobs.component.html',
  styleUrls: ['./cluster-jobs.component.scss']
})
export class ClusterJobsComponent implements OnInit {
  apiData: any[] = [];
  username: string = '';
  awsBody = {};
  StausName: string = '';
  showProgressBar: boolean = false;
  propertyName: string = '';
  title: string = '';

  constructor(private http: HttpClient,
    private service: RegisterService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username") ?? '';
    this.fetchDataBasedOnRoute();
  }
  fetchAwsData() {
    this.showProgressBar = true;
    this.awsBody = {
      username: this.username
    }
    this.service.postAwsJobs(this.awsBody).subscribe((data: any[]) => {
      this.showProgressBar = false;
      this.apiData = data;
    });
  }

  fetchAwsDeleteData() {
    this.showProgressBar = true;
    this.awsBody = {
      username: this.username
    }
    this.service.postAwsDeleteJobs(this.awsBody).subscribe((data: any[]) => {
      this.showProgressBar = false;
      this.apiData = data;
    });
  }

  fetchAzureData() {
    this.showProgressBar = true;
    this.awsBody = {
      username: this.username
    }
    this.service.postAzureJobs(this.awsBody).subscribe((data: any[]) => {
      this.showProgressBar = false;
      this.apiData = data;
    });
  }

  fetchAzureDeleteData() {
    this.showProgressBar = true;
    this.awsBody = {
      username: this.username
    }
    this.service.postAzureDeleteJobs(this.awsBody).subscribe((data: any[]) => {
      this.showProgressBar = false;
      this.apiData = data;
    });
  }


  fetchGcpData() {
    this.showProgressBar = true;
    this.awsBody = {
      username: this.username
    }
    this.service.postGcpJobs(this.awsBody).subscribe((data: any[]) => {
      this.showProgressBar = false;
      this.apiData = data;
    });
  }

  fetchGcpDeleteData() {
    this.showProgressBar = true;
    this.awsBody = {
      username: this.username
    }
    this.service.postGcpDeleteJobs(this.awsBody).subscribe((data: any[]) => {
      this.showProgressBar = false;
      this.apiData = data;
    });
  }

  fetchDataBasedOnRoute() {
    this.route.url.subscribe(segments => {
      if (segments.length > 0) {
        const routePath = segments[0].path;
        if (routePath === 'aws-jobs') {
          this.title = 'Aws Jobs';
          this.StausName = 'EKS Staus';
          this.propertyName = 'eks_status';
          this.fetchAwsData();
        }

        else if (routePath === 'eks-jobs') {
          this.title = 'Eks Jobs'
          this.StausName = 'EKS Staus';
          this.propertyName = 'eks_status';
          this.fetchAwsDeleteData();
        }
        else if (routePath === 'azure-jobs' ) {
          this.title = 'Azure Jobs';
          this.StausName = 'AKS Staus';
          this.propertyName = 'aks_status';
          this.fetchAzureData();
        }
        else if (routePath === 'aks-jobs') {
          this.title = 'Aks Jobs'
          this.StausName = 'AKS Staus';
          this.propertyName = 'aks_status';
          this.fetchAzureDeleteData();
        }
        else if (routePath === 'gcp-jobs') {
          this.title = 'Gcp Jobs';
          this.StausName = 'GKE Staus';
          this.propertyName = 'gke_status';
          this.fetchGcpData();
        }

        else if (routePath === 'gke-jobs') {
          this.title = 'Gke Jobs'
          this.StausName = 'GKE Staus';
          this.propertyName = 'gke_status';
          this.fetchGcpDeleteData();
        }
      }
    });
  }
}
