import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClickAws(){
    this.enterRegion = true;
    // this.router.navigate(["/home/delete-cloud-selection/delete-eks"]);
  }
  
  onClickAzure(){
      // this.router.navigate(["/home/delete-cloud-selection/delete-aks"]);
    }

  onClickGcp(){
      // this.router.navigate(["/home/delete-cloud-selection/delete-gke"]);
    }
onCancel(){
  this.enterRegion = false;
}
    onNextEks(){

    }

    get Region():FormControl{
      return this.createForm.get("region") as FormControl;
    }
  }