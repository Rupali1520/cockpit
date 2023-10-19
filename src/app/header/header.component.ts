import { Component, OnInit } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  matchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    matrixParams: 'exact',
    queryParams: 'subset',
    fragment: 'ignored'
  };
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  isActiveRoute(routeUrl: string): boolean {
    return this.router.isActive(routeUrl, this.matchOptions);
  }

}
