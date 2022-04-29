import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public router:Router) { }

  checkLogin(){
    if (localStorage.getItem('username') === "tops" && localStorage.getItem('password') === "123"){
      return true
    }
    else if (localStorage.getItem('username') === "abc" && localStorage.getItem('password') === "abc"){
      return true
    }
    else{
       this.router.navigate(['login']);
      return false
    }
  }

}
