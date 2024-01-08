import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-cluster',
  templateUrl: './my-cluster.component.html',
  styleUrls: ['./my-cluster.component.scss']
})
export class MyClusterComponent implements OnInit {
  enterRegion:boolean =false;
  createForm= new FormGroup({
    region: new FormControl('',[Validators.required])
  });
  showProgressBar: boolean = false;
  showCard:boolean = false;
    username: string='';
    cardTitle:string='';
    awsBody={};
    azureBody={};
    gcpBody={};
    sampleData = {};

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: RegisterService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username") ?? '';

  }
  onClickAws(){
    this.enterRegion = true;
  }
  
  onClickAzure(){
    this.showProgressBar = true;
    this.azureBody={
      username: this.username
    }
      this.service.getAzureClusters(this.azureBody).subscribe((res)=>{
        this.showProgressBar = false;
        this.sampleData = res;
        this.cardTitle="Azure";
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
      this.service.getGcpClusters(this.gcpBody).subscribe((res)=>{
        this.showProgressBar = false;
        this.sampleData = res;
        this.cardTitle="GCP";
        this.showCard =true;
      }, (error)=>{
        this.showProgressBar = false;
        this.toast.error(error.error.error)
      })
    }
onCancel(){
  this.enterRegion = false;
}
    onNextEks(){
      this.showProgressBar = true;
      this.awsBody={
        username: this.username
      }
      this.service.getAwsClusters(this.awsBody).subscribe((res)=>{
        this.showProgressBar = false;
        this.sampleData = res;
        this.cardTitle="Aws";
        this.showCard =true;
      }, (error)=>{
        this.showProgressBar = false;
        this.toast.error(error.error.error)
      })
    }

    get Region():FormControl{
      return this.createForm.get("region") as FormControl;
    }
  }