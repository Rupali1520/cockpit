import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cloud-selection',
  templateUrl: './cloud-selection.component.html',
  styleUrls: ['./cloud-selection.component.scss']
})
export class CloudSelectionComponent implements OnInit {
  title='';

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
  }
  onClickAws(){
    if(this.title === 'delete'){
    this.router.navigate(["/home/delete-cloud-selection/delete-eks"]);}
    else{
      this.router.navigate(["/home/cloud-selection/aws"]);}
    }

  onClickAzure(){
    if(this.title === 'delete'){
      this.router.navigate(["/home/delete-cloud-selection/delete-aks"]);}
      else{
        this.router.navigate(["/home/cloud-selection/azure"]);}  }

  onClickGcp(){
    if(this.title === 'delete'){
      this.router.navigate(["/home/delete-cloud-selection/delete-gke"]);}
      else{
        this.router.navigate(["/home/cloud-selection/gcp"]);}  }
}
