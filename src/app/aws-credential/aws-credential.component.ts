import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-aws-credential',
  templateUrl: './aws-credential.component.html',
  styleUrls: ['./aws-credential.component.scss']
})
export class AwsCredentialComponent implements OnInit {
  createForm= new FormGroup({
    username: new FormControl('',[Validators.required]),
    access_key: new FormControl('',[Validators.required]),
    secret_access_key: new FormControl('',[Validators.required]),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNextEks(){
    this.router.navigate(["/home/cloud-selection/aws/aws2"]);
  }

  get Username():FormControl{
    return this.createForm.get("username") as FormControl;
  }

  get AccessKey():FormControl{
    return this.createForm.get("access_key") as FormControl;
  }

  get SecretAccesskey():FormControl{
    return this.createForm.get("secret_access_key") as FormControl;
  }
}
