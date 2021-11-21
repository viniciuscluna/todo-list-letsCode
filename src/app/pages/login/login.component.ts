import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticationNotSuccessfull: boolean = false

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  onSubmit(): void {
    if (!this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)) {
      this.authenticationNotSuccessfull = true
     this.loginForm.reset()
     return
    }
    this.router.navigate(["/"])
  }

  ngOnInit(): void {
  }

}
