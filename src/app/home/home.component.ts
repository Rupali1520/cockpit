import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: RegisterService) { }

  ngOnInit() {
    this.service.getRegister().subscribe()
  }

}
