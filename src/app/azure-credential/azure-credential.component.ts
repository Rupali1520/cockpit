import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-azure-credential',
  templateUrl: './azure-credential.component.html',
  styleUrls: ['./azure-credential.component.scss']
})
export class AzureCredentialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNextAks(){
    this.router.navigate(["/home/cloud-selection/azure/azure2"]);
  }

}
