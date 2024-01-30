import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-credentials',
  templateUrl: './card-credentials.component.html',
  styleUrls: ['./card-credentials.component.scss']
})
export class CardCredentialsComponent implements OnInit {
  @Input() sampleData: { [key: string]: { [innerKey: string]: any } } = {};
  @Input() cardTitle: string= "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  private navigateToRoute(action: string) {
    if (this.cardTitle === 'AWS')
      this.router.navigate(['home/cloud-selection/aws'], { queryParams: { action: action } });
    else if (this.cardTitle === 'Azure')
      this.router.navigate(['home/cloud-selection/azure'], { queryParams: { action: action } });
    else if (this.cardTitle === "GCP")
      this.router.navigate(['home/cloud-selection/gcp'], { queryParams: { action: action } });
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

  onAdd(){
    this.navigateToRoute('Add');
  }

  onUpdate(){
    this.navigateToRoute('Update');
  }

  onDelete(){
    this.navigateToRoute('Delete');
  }

  onBack(){
        location.reload()
      }
  
}
