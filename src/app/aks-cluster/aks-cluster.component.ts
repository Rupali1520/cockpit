import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-aks-cluster',
  templateUrl: './aks-cluster.component.html',
  styleUrls: ['./aks-cluster.component.scss']
})
export class AksClusterComponent implements OnInit {
  createForm= new FormGroup({
    resource_group: new FormControl('',[Validators.required]),
    Region: new FormControl('',[Validators.required]),
    availability_zones: new FormControl('',[Validators.required]),
    aks_name: new FormControl('',[Validators.required]),
    aks_version: new FormControl('',[Validators.required]),
    node_count: new FormControl('',[Validators.required]),
    cluster_type: new FormControl('',[Validators.required]),
  });
  constructor(private router: Router,
    private service: RegisterService,
    private toast: ToastrService) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.router.navigate(["/home/cloud-selection/azure"]);
  }

  onSubmit() {
    let aksVersion: number | null = null;
    const aksVersionControl = this.createForm.get('aks_version');
    if (aksVersionControl && aksVersionControl.value !== null && aksVersionControl.value !== undefined) {
      aksVersion = parseFloat(aksVersionControl.value);
    }
  
    const formData = {
      ...this.createForm.value,
      aks_version: aksVersion,
    };  
    this.service.postAksCluster(formData).subscribe(
      (res) => {
        this.toast.success(res.message);
        this.createForm.reset();
        this.router.navigate(['/home/cloud-selection']);
      },
      (error) => {
        this.toast.error(error.error.message);
      }
    );
  }

  get ResourceName():FormControl{
    return this.createForm.get("resource_group") as FormControl;
  }

  get Region():FormControl{
    return this.createForm.get("Region") as FormControl;
  }

  get Availability():FormControl{
    return this.createForm.get("availability_zones") as FormControl;
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
