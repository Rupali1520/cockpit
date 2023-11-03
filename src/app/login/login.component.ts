import { Component, OnInit, ElementRef, Renderer2  } from '@angular/core';
import { faAt, faUser, faLock,faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../services/register.service';

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
  signUpForm: FormGroup;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private formBuilder: FormBuilder, private service: RegisterService) {
    this.signUpForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      confirm_password: ''
    });
  }

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

  onSubmit() {
    this.service.postRegister(this.signUpForm.value).subscribe((res)=>{
    this.signUpForm.reset();
    })
  }
}
