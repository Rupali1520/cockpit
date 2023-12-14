import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-credentials',
  templateUrl: './card-credentials.component.html',
  styleUrls: ['./card-credentials.component.scss']
})
export class CardCredentialsComponent implements OnInit {
  @Input() sampleData: { [key: string]: { [innerKey: string]: any } } = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
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

  onBack(){
        location.reload()
      }
  
}
