import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = !event.url.includes('dashboard');
      }
    });
  }


  onLogin() {
    if (this.isLoggedIn) {
      localStorage.removeItem('loggedIn');
      // Your logout functionality here
      this.router.navigate(["/dashboard"]);
    } else {
      // Your login functionality here
      this.router.navigate(["/login"]);
    }
  }
}
