import { Component, OnInit, ElementRef, Renderer2  } from '@angular/core';
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
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const signUpButton = this.elementRef.nativeElement.querySelector('#signUp');
    const signInButton = this.elementRef.nativeElement.querySelector('#signIn');
    const container = this.elementRef.nativeElement.querySelector('#container');

    signUpButton.addEventListener('click', () =>
      this.renderer.addClass(container, 'right-panel-active')
    );

    signInButton.addEventListener('click', () =>
      this.renderer.removeClass(container, 'right-panel-active')
    );
  }

  ngOnInit(): void {
  }

}
