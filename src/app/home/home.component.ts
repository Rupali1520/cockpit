import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  successMessage:string='';

  constructor(private toast: ToastrService,) { }

  ngOnInit() {
    this.toast.success("hellooo")
  }
}
