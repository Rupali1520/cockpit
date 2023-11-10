import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-aws-credential',
  templateUrl: './aws-credential.component.html',
  styleUrls: ['./aws-credential.component.scss']
})
export class AwsCredentialComponent implements OnInit {
  createForm= new FormGroup({
    user_name: new FormControl('',[Validators.required]),
    access_key: new FormControl('',[Validators.required, this.accessKeyValidator.bind(this)]),
    secret_access_key: new FormControl('',[Validators.required]),
  });
  showProgressBar: boolean = false;

  constructor(private router: Router,
    private service: RegisterService,
    private toast: ToastrService) { }

  ngOnInit(): void {
  }

  accessKeyValidator(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value;
    const isValid = /^AKIA[A-Za-z0-9]*$/.test(value);
    return isValid ? null : { 'invalidAccessKey': true };
  }
  
  onNextEks(){
    this.showProgressBar = true;
    this.service.postAwsCluster(this.createForm.value).subscribe((res)=>{
      this.showProgressBar = false;
      this.toast.success(res.message);
      this.createForm.reset();
      this.router.navigate(["/home/cloud-selection/aws/aws2"]);
    }, (error)=>{
      this.showProgressBar = false;
      this.toast.error(error.error.message)
    })
  }
  get Username():FormControl{
    return this.createForm.get("user_name") as FormControl;
  }

  get AccessKey():FormControl{
    return this.createForm.get("access_key") as FormControl;
  }

  get SecretAccesskey():FormControl{
    return this.createForm.get("secret_access_key") as FormControl;
  }
}
