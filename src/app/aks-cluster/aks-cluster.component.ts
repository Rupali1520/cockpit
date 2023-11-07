import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-aks-cluster',
  templateUrl: './aks-cluster.component.html',
  styleUrls: ['./aks-cluster.component.scss']
})
export class AksClusterComponent implements OnInit {
  createForm= new FormGroup({
    resource_name: new FormControl('',[Validators.required]),
    region: new FormControl('',[Validators.required]),
    availability: new FormControl('',[Validators.required]),
    aks_name: new FormControl('',[Validators.required]),
    aks_version: new FormControl('',[Validators.required]),
    node_count: new FormControl('',[Validators.required]),
    cluster_type: new FormControl('',[Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){}

  get ResourceName():FormControl{
    return this.createForm.get("resource_name") as FormControl;
  }

  get Region():FormControl{
    return this.createForm.get("region") as FormControl;
  }

  get Availability():FormControl{
    return this.createForm.get("availability") as FormControl;
  }

  get AksName():FormControl{
    return this.createForm.get("aks_name") as FormControl;
  }

  get AksVersion():FormControl{
    return this.createForm.get("aks_version") as FormControl;
  }

  get NodeCount():FormControl{
    return this.createForm.get("node_count") as FormControl;
  }

  get ClusterType():FormControl{
    return this.createForm.get("cluster_type") as FormControl;
  }
}
