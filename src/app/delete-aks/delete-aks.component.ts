import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-delete-aks',
  templateUrl: './delete-aks.component.html',
  styleUrls: ['./delete-aks.component.scss']
})
export class DeleteAksComponent implements OnInit {
  createForm= new FormGroup({
    resource_group: new FormControl('',[Validators.required]),
    aks_name: new FormControl('',[Validators.required]),
  });
  username: string='';
  azureBody={};
  sampleData:any;
  constructor(private router: Router,
    private service: RegisterService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username") ?? '';
    this.azureBody={
      username: this.username
    }
    this.service.getAzureClusters(this.azureBody).subscribe((res)=>{
      this.sampleData = res.aks_cluster;
    }, (error)=>{
      this.toast.error(error.error.error_message + `Can't Get AKS Name`)
    })
  }

  onCancel(){
    this.router.navigate(["/home"]);
  }

  onSubmit() { 
    this.service.postDeleteAksCluster(this.createForm.value).subscribe(
      (res) => {
        this.toast.success(res.message);
        this.createForm.reset();
        this.router.navigate(['/home/delete-cloud-selection/delete-aks/azure-jobs']);
      },
      (error) => {
        this.toast.error(error.error.message);
      }
    );
  }

  get ResourceName():FormControl{
    return this.createForm.get("resource_group") as FormControl;
  }

  get AksName():FormControl{
    return this.createForm.get("aks_name") as FormControl;
  }
}
