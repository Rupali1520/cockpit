import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gcp-credential',
  templateUrl: './gcp-credential.component.html',
  styleUrls: ['./gcp-credential.component.scss']
})
export class GcpCredentialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNextGke(){
    this.router.navigate(["/home/cloud-selection/gcp/gcp2"]);
  }

}
