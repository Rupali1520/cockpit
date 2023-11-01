import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aws-credential',
  templateUrl: './aws-credential.component.html',
  styleUrls: ['./aws-credential.component.scss']
})
export class AwsCredentialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNextEks(){
    this.router.navigate(["/aws2"]);
  }
}
