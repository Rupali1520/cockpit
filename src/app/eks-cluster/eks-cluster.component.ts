import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-eks-cluster',
  templateUrl: './eks-cluster.component.html',
  styleUrls: ['./eks-cluster.component.scss']
})
export class EksClusterComponent implements OnInit {
  createForm= new FormGroup({
    cluster_name: new FormControl('',[Validators.required]),
    region: new FormControl('',[Validators.required]),
    instance_type: new FormControl('',[Validators.required]),
    eks_version: new FormControl('',[Validators.required]),
    desired_size: new FormControl('',[Validators.required]),
    max_size: new FormControl('',[Validators.required]),
    min_size: new FormControl('',[Validators.required]),
    cluster_type: new FormControl('',[Validators.required]),
  });
  showProgressBar: boolean = false;

  constructor(private router: Router,
    private service: RegisterService,
    private toast: ToastrService) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.router.navigate(["/home/cloud-selection/aws"]);
  }

  onNextEks(){
    this.showProgressBar = true;
    this.service.postEksCluster(this.createForm.value).subscribe((res)=>{
      this.showProgressBar = false;
      this.toast.success(res.message);
      this.createForm.reset();
      this.router.navigate(["/home"]);
    }, (error)=>{
      this.showProgressBar = false;
      this.toast.error(error.error.message)
    })
  }

  get ClusterName():FormControl{
    return this.createForm.get("cluster_name") as FormControl;
  }

  get Region():FormControl{
    return this.createForm.get("region") as FormControl;
  }

  get InstanceType():FormControl{
    return this.createForm.get("instance_type") as FormControl;
  }

  get EksVersion():FormControl{
    return this.createForm.get("eks_version") as FormControl;
  }

  get DesiredSize():FormControl{
    return this.createForm.get("desired_size") as FormControl;
  }

  get MaxSize():FormControl{
    return this.createForm.get("max_size") as FormControl;
  }

  get MinSize():FormControl{
    return this.createForm.get("min_size") as FormControl;
  }

  get ClusterType():FormControl{
    return this.createForm.get("cluster_type") as FormControl;
  }

}
