import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'todo-send';
  isAuthenticated: boolean = false;

  authenticatedInterval: ReturnType<typeof setInterval> = setInterval(() => {
  }, 2000);

  constructor(private loginService: LoginService) {
  }
  
  ngOnInit(): void {
    this.authenticatedInterval = setInterval(() => {
      this.isAuthenticated = this.loginService.isAuthenticated()
    }, 500)
  }



  ngOnDestroy(): void {
    clearInterval(this.authenticatedInterval)
  }
}
