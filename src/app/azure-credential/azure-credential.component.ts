import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-azure-credential',
  templateUrl: './azure-credential.component.html',
  styleUrls: ['./azure-credential.component.scss']
})
export class AzureCredentialComponent implements OnInit {
  createForm= new FormGroup({
    username: new FormControl('',[Validators.required]),
    subscription: new FormControl('',[Validators.required]),
    client_id: new FormControl('',[Validators.required]),
    client_secret: new FormControl('',[Validators.required]),
    tenant_id: new FormControl('',[Validators.required]),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNextAks(){
    this.router.navigate(["/home/cloud-selection/azure/azure2"]);
  }

  get Username():FormControl{
    return this.createForm.get("username") as FormControl;
  }

  get Subscription():FormControl{
    return this.createForm.get("subscription") as FormControl;
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
