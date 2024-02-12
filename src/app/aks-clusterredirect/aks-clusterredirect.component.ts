import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-aks-clusterredirect',
  templateUrl: './aks-clusterredirect.component.html',
  styleUrls: ['./aks-clusterredirect.component.scss']
})
export class AksClusterredirectComponent implements OnInit {
  
  constructor(
    private service: RegisterService,
    private toast: ToastrService,
    ){}
    job_id: any;
    required_job_id: any;
    
  ngOnInit(): void {
    this.onClick();
  
  }

  onClick() {
    const cluster = {
      username: "cockpit-team",
      most_recent_job_id: "most_recent_job_id",
      message: "Most recent job ID retrieved successfully"
    };
    this.service.postRedirectAksCluster(cluster).subscribe(
      (res) => {
        this.job_id = res.most_recent_job_id  
      },(error) => {
        this.toast.error(error.error.message);
      }
    );
  }
  onSave() {
    const jobid ={
    username: "cockpit-team",
    }
    this.service.postRedirectlogAksCluster(this.job_id, jobid).subscribe(
    (res) => {
    },
    (error) => {
      this.toast.error(error.error.message);
    }
    );    

  }
}