import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-crediantials-detail',
  templateUrl: './crediantials-detail.component.html',
  styleUrls: ['./crediantials-detail.component.scss']
})
export class CrediantialsDetailComponent implements OnInit {

  constructor(private router: Router,
    private service: RegisterService,
    private toast: ToastrService) { }
    showProgressBar: boolean = false;
    showCard:boolean = false;
    username: string='';
    cardTitle: string= '';
    awsBody={}
    azureBody={};
    gcpBody={};
    sampleData = {};

  ngOnInit(): void {
    this.username = localStorage.getItem("username") ?? '';
  }
  onClickAws(){
    this.showProgressBar = true;
    this.awsBody={
      username: this.username
    }
    this.service.getAwsCrediantial(this.awsBody).subscribe((res)=>{
      this.showProgressBar = false;
      this.sampleData = res;
      this.cardTitle="AWS";
      this.toast.success("Success");
      this.showCard =true;
      }, (error)=>{
        this.showProgressBar = false;
        this.toast.error(error.error.error)
      })
  }
  
  onClickAzure(){
    this.showProgressBar = true;
    this.azureBody={
      username: this.username
    }
    this.service.getAzureCrediantial(this.azureBody).subscribe((res)=>{
      this.showProgressBar = false;
      this.sampleData = res;
      this.cardTitle="Azure";
      this.toast.success("Success");
      this.showCard =true;
    }, (error)=>{
      this.showProgressBar = false;
      this.toast.error(error.error.error)
    })
    }

  onClickGcp(){
    this.showProgressBar = true;
    this.gcpBody={
      username: this.username
    }
    this.service.getGcpCrediantial(this.gcpBody).subscribe((res)=>{
      this.showProgressBar = false;
      this.sampleData = res;
      this.cardTitle="GCP";
      this.toast.success("Success");
      this.showCard =true;
    }, (error)=>{
      this.showProgressBar = false;
      this.toast.error(error.error.error)
    })
    }
  }