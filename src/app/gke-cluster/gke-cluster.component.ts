import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gke-cluster',
  templateUrl: './gke-cluster.component.html',
  styleUrls: ['./gke-cluster.component.scss']
})
export class GkeClusterComponent implements OnInit {
  createForm= new FormGroup({
    project: new FormControl('',[Validators.required]),
    Region: new FormControl('',[Validators.required]),
    gke_name: new FormControl('',[Validators.required]),
    gke_version: new FormControl('',[Validators.required]),
    node_count: new FormControl('',[Validators.required]),
    cluster_type: new FormControl('',[Validators.required]),
  });
  showProgressBar: boolean = false;

  constructor(private router: Router,
    private service: RegisterService,
    private toast: ToastrService) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.router.navigate(["/home"]);
  }

  onSubmit(){
    this.showProgressBar = true;
    this.service.postGkeCluster(this.createForm.value).subscribe((res)=>{
      this.showProgressBar = false;
      this.toast.success(res.message);
      this.createForm.reset();
      this.router.navigate(["/home"]);
    }, (error)=>{
      this.showProgressBar = false;
      this.toast.error(error.error.message)
    })
  }

  get Project():FormControl{
    return this.createForm.get("project") as FormControl;
  }

  get Region():FormControl{
    return this.createForm.get("Region") as FormControl;
  }

  get GkeName():FormControl{
    return this.createForm.get("gke_name") as FormControl;
  }

  get GkeVersion():FormControl{
    return this.createForm.get("gke_version") as FormControl;
  }

  get NodeCount():FormControl{
    return this.createForm.get("node_count") as FormControl;
  }

  get ClusterType():FormControl{
    return this.createForm.get("cluster_type") as FormControl;
  }
}
