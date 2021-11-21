import { Injectable } from '@angular/core';
import { LocalUtilsService } from './local-utils.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private localLocalUtilsService: LocalUtilsService) { }

  login(username: string, password: string){
    if(username === 'test' && password === '123456')
    {
      this.localLocalUtilsService.setLogin({UserName: username, Password: password})
      return true
    }
    else return false
  }

  isAuthenticated(){
    return this.localLocalUtilsService.getLogin() !== null
  }

  exit(){
    this.localLocalUtilsService.clearLogin()
  }
}
