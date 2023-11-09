import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-azure-credential',
  templateUrl: './azure-credential.component.html',
  styleUrls: ['./azure-credential.component.scss']
})
export class AzureCredentialComponent implements OnInit {
  createForm= new FormGroup({
    User_name: new FormControl('',[Validators.required]),
    subscription_id: new FormControl('',[Validators.required]),
    client_id: new FormControl('',[Validators.required]),
    client_secret: new FormControl('',[Validators.required]),
    tenant_id: new FormControl('',[Validators.required]),
  });
  constructor(private router: Router,
    private service: RegisterService,
    private toast: ToastrService) { }

  ngOnInit(): void {
  }

  onNextAks(){
    this.service.postAzureCluster(this.createForm.value).subscribe((res)=>{
      this.toast.success(res.message);
      this.createForm.reset();
      this.router.navigate(["/home/cloud-selection/azure/azure2"]);
    })
  }

  get Username():FormControl{
    return this.createForm.get("User_name") as FormControl;
  }

  get subscriptionId():FormControl{
    return this.createForm.get("subscription_id") as FormControl;
  }

  get ClientId():FormControl{
    return this.createForm.get("client_id") as FormControl;
  }

  get ClientSecret():FormControl{
    return this.createForm.get("client_secret") as FormControl;
  }

  get TenantId():FormControl{
    return this.createForm.get("tenant_id") as FormControl;
  }

}
