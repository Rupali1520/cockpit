import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-card-credentials',
  templateUrl: './card-credentials.component.html',
  styleUrls: ['./card-credentials.component.scss']
})
export class CardCredentialsComponent implements OnInit {
  @Input() sampleData: { [key: string]: { [innerKey: string]: any } } = {};
  @Input() cardTitle: string = "";
  username: string = '';
  postUsername= {};
  selectedAccountData: any;
  accountNames: string[] = [];
  accountName: string = '';
  postData = {};
  constructor(private router: Router, private service: RegisterService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username") ?? '';
    this.onAccountChange()
  }

  private navigateToRoute(action: string) {
    if (this.cardTitle === 'AWS')
      this.router.navigate(['home/cloud-selection/aws'], { queryParams: { action: action } });
    else if (this.cardTitle === 'Azure')
      this.router.navigate(['home/cloud-selection/azure'], { queryParams: { action: action } });
    else if (this.cardTitle === "GCP")
      this.router.navigate(['home/cloud-selection/gcp'], { queryParams: { action: action } });
  }

  onAccountChange() {
    this.postUsername={
      username: this.username
    }
    this.service.getAzureCrediantial(this.postUsername).subscribe(
      (data) => {
        this.accountNames = data.map((item: any) => item);
        this.onAccountSelected()
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  onAccountSelected() {
    if (this.accountName) {
      this.fetchSelectedAccountData();
    }
  }
  

  fetchSelectedAccountData() {
    this.postData = {
      account_name: this.accountName 
    }
    this.service.getAzure(this.postData).subscribe((data)=>{
      this.selectedAccountData = data;
    },
    (error) => {
      console.error('Error fetching selected account data:', error);
    }
  );
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

  onAdd() {
    this.navigateToRoute('Add');
  }

  onUpdate() {
    this.navigateToRoute('Update');
  }

  onDelete() {
    this.navigateToRoute('Delete');
  }

  onBack() {
    location.reload();
  }
}
