import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-gke-clusterredirect',
  templateUrl: './gkeClusterredirect.component.html',
  styleUrls: ['./gkeClusterredirect.component.scss']
})
export class GkeClusterredirectComponent implements OnInit {
  responseString: any;
  constructor(
    private RegisterService: RegisterService,
    private service: RegisterService,
    private toast: ToastrService,
    ){}
    job_id: any;
    required_job_id: any;
  ngOnInit(): void {
    this.onClick();
  }

  postData() {
    const data = { /* your data */ };
    this.RegisterService.postData(data).subscribe(
      (response) => {
        this.responseString = JSON.stringify(response);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
    this.onSave();
  }

  onClick() {
    const cluster = {
      username: "cockpit-team"
    };
    this.service.postRedirectGcpCluster(cluster).subscribe(
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
    this.service.postRedirectlogGcpCluster(this.job_id, jobid).subscribe(
      (res) => {
        const _res = res.logs;
        this.responseString = _res;  
      },
    (error) => {
      this.toast.error(error.error.message);
    }
    );    
 
}
}
