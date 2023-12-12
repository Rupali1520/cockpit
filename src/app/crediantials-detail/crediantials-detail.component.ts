import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crediantials-detail',
  templateUrl: './crediantials-detail.component.html',
  styleUrls: ['./crediantials-detail.component.scss']
})
export class CrediantialsDetailComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClickAws(){
    // this.router.navigate(["/home/delete-cloud-selection/delete-eks"]);
  }
  
  onClickAzure(){
      // this.router.navigate(["/home/delete-cloud-selection/delete-aks"]);
    }

  onClickGcp(){
      // this.router.navigate(["/home/delete-cloud-selection/delete-gke"]);
    }
  }