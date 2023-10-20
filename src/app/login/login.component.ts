import { Component, OnInit } from '@angular/core';
import { faAt, faUser, faLock,faArrowUp } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailIcon = faAt
  passwordIcon = faLock
  userIcon = faUser
  arrowIcon = faArrowUp
  constructor() { }

  ngOnInit(): void {
  }

}
