import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isLoggedIn:boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn=Boolean(localStorage.getItem('loggedIn'))
  }

  @HostListener('window:storage', ['$event'])
  onStorageChange(event: StorageEvent) {
    if (event.key === 'loggedIn') {
      this.isLoggedIn = Boolean(event.newValue);
    }
  }


  onLogin() {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}