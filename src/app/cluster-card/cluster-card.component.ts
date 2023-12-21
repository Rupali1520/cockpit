import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cluster-card',
  templateUrl: './cluster-card.component.html',
  styleUrls: ['./cluster-card.component.scss']
})
export class ClusterCardComponent implements OnInit {

  @Input() sampleData: { [key: string]: { [innerKey: string]: any } } = {};
  @Input() cardTitle: string= "";
  awsModal:boolean=false;
  azureModal: boolean = false;
  gcpModal:boolean=false;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.azureModal = false;
    this.awsModal=false;
    this.gcpModal=false;
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && !Array.isArray(value);
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  onBack() {
    location.reload();
  }

  onConnect() {
    if(this.cardTitle ==='Aws'){
    this.awsModal = true;
    }

    if(this.cardTitle ==='Azure'){
      this.azureModal = true;
      }

      if(this.cardTitle ==='GCP'){
        this.gcpModal = true;
        }

  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
