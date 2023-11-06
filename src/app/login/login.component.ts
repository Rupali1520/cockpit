import { Component, OnInit, ElementRef, Renderer2  } from '@angular/core';
import { faAt, faUser, faLock,faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  repeatPassword: string= 'none';

  createForm= new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(2)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(2)]),
    confirm_password: new FormControl('',[Validators.required])
  });

  constructor(private elementRef: ElementRef, 
    private renderer: Renderer2, 
    private formBuilder: FormBuilder, 
    private service: RegisterService) {
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
    if(this.Password.value === this.ConfirmPassword.value){
    this.service.postRegister(this.createForm.value).subscribe((res)=>{
    this.createForm.reset();
    this.repeatPassword='none';
    })
  }
  else{
    this.repeatPassword = 'inline'
  }
  }

  get Username():FormControl{
    return this.createForm.get("username") as FormControl;
  }

  get Email():FormControl{
    return this.createForm.get("email") as FormControl;
  }

  get Password():FormControl{
    return this.createForm.get("password") as FormControl;
  }

  get ConfirmPassword():FormControl{
    return this.createForm.get("confirm_password") as FormControl;
  }

}
