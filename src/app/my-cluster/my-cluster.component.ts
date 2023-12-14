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
    awsBody={};
    azureBody={};
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
        this.toast.success("Success");
        this.showCard =true;
      }, (error)=>{
        this.showProgressBar = false;
        this.toast.error(error.error.error)
      })
    }

  onClickGcp(){
    this.showProgressBar = true;
      this.service.getGcpClusters().subscribe((res)=>{
        this.showProgressBar = false;
        this.toast.success(res.message);
        this.router.navigate(["/home"]);
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
        this.toast.success("Success");
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