import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  successMessage:string='';
  selectedTabIndex = 0;

  tabs = ['Create Cluster', 'My Cluster', 'Account Details', 'Cluster Status', 'Cost Optimisation', 'Delete Cluster' ];

  onTabClick(index: number): void {
    this.selectedTabIndex = index;
  }

  constructor() { }

  ngOnInit() {
  }
}
