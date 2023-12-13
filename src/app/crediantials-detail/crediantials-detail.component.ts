import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-crediantials-detail',
  templateUrl: './crediantials-detail.component.html',
  styleUrls: ['./crediantials-detail.component.scss']
})
export class CrediantialsDetailComponent implements OnInit {

  constructor(private router: Router,
    private service: RegisterService,
    private toast: ToastrService) { }
    showProgressBar: boolean = false;

  ngOnInit(): void {
  }
  onClickAws(){
    this.showProgressBar = true;
      this.service.getAwsCrediantial().subscribe((res)=>{
        this.showProgressBar = false;
        console.log(res);
        this.toast.success(res.message);
        this.router.navigate(["/home"]);
      }, (error)=>{
        this.showProgressBar = false;
        this.toast.error(error.error.error)
      })
  }
  
  onClickAzure(){
    this.showProgressBar = true;
    this.service.getAzureCrediantial().subscribe((res)=>{
      this.showProgressBar = false;
      console.log(res);
      this.toast.success(res.message);
      this.router.navigate(["/home"]);
    }, (error)=>{
      this.showProgressBar = false;
      this.toast.error(error.error.error)
    })
    }

  onClickGcp(){
    this.showProgressBar = true;
    this.service.getGcpCrediantial().subscribe((res)=>{
      this.showProgressBar = false;
      console.log(res);
      this.toast.success(res.message);
      this.router.navigate(["/home"]);
    }, (error)=>{
      this.showProgressBar = false;
      this.toast.error(error.error.error)
    })
    }
  }