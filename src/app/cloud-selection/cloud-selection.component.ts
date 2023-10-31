import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cloud-selection',
  templateUrl: './cloud-selection.component.html',
  styleUrls: ['./cloud-selection.component.scss']
})
export class CloudSelectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClickAws(){
    this.router.navigate(["/aws"]);
  }

  onClickAzure(){
    this.router.navigate(["/azure"]);
  }

  onClickGcp(){
    this.router.navigate(["/gcp"]);
  }
}
