import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-gke',
  templateUrl: './delete-gke.component.html',
  styleUrls: ['./delete-gke.component.scss']
})
export class DeleteGkeComponent implements OnInit {
  createForm= new FormGroup({
    project_id: new FormControl('',[Validators.required]),
    region: new FormControl('',[Validators.required]),
    gke_name: new FormControl('',[Validators.required]),
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
    this.service.postDeleteGkeCluster(this.createForm.value).subscribe((res)=>{
      this.showProgressBar = false;
      this.toast.success(res.message);
      this.createForm.reset();
      this.router.navigate(["/home"]);
    }, (error)=>{
      this.showProgressBar = false;
      this.toast.error(error.error.message)
    })
  }

  get ProjectId():FormControl{
    return this.createForm.get("project_id") as FormControl;
  }

  get Region():FormControl{
    return this.createForm.get("region") as FormControl;
  }

  get GkeName():FormControl{
    return this.createForm.get("gke_name") as FormControl;
  }
}
