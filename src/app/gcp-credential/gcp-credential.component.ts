import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gcp-credential',
  templateUrl: './gcp-credential.component.html',
  styleUrls: ['./gcp-credential.component.scss']
})
export class GcpCredentialComponent implements OnInit {
  createForm= new FormGroup({
    username: new FormControl('',[Validators.required]),
    json_file: new FormControl('',[Validators.required]),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNextGke(){
    console.log(this.createForm.value)
    // this.router.navigate(["/home/cloud-selection/gcp/gcp2"]);
  }

  get Username():FormControl{
    return this.createForm.get("username") as FormControl;
  }

  get JsonFile():FormControl{
    return this.createForm.get("json_file") as FormControl;
  }
}
