import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-aks-clusterredirect',
  templateUrl: './aksClusterredirect.component.html',
  styleUrls: ['./aksClusterredirect.component.scss']
})
export class AksClusterredirectComponent implements OnInit {
  responseString: any;
  loading: boolean = false; // Variable to control the visibility of the loader

  constructor(

    private RegisterService: RegisterService,
    private service: RegisterService,
    private toast: ToastrService,
  ) { }

  job_id: any;

  ngOnInit(): void {
    this.onClick();
  }

  postData() {
    this.loading = true; // Show loader when button is clicked
    const data = { /* your data */ };
    this.RegisterService.postData(data).subscribe(
      (response) => {
        this.responseString = JSON.stringify(response);
        this.loading = false; // Hide loader when response is received
      },
      (error) => {
        console.error('Error occurred:', error);
        this.loading = false; // Hide loader on error
      }
    );
    this.onSave();
  }

  onClick() {
    const cluster = {
      username: "cockpit-team"
    };
    this.service.postRedirectAksCluster(cluster).subscribe(
      (res) => {
        this.job_id = res.most_recent_job_id;
        this.loading = false; // Hide loader once job ID is received
      },
      (error) => {
        this.toast.error(error.error.message);
        this.loading = false; // Hide loader on error
      }
    );
  }

  onSave() {
    const jobid = {
      username: "cockpit-team",
    }
    this.service.postRedirectlogAksCluster(this.job_id, jobid).subscribe(
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
