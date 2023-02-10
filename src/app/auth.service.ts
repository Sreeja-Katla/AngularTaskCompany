import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  public userLoggedIn :boolean=false;

  constructor(private routing:Router) { }

  canActivate(){
    if(this.userLoggedIn){
      return true;
    }
    else{
      
      this.routing.navigate(['/login'])
      return false;
    }
  
  }
  loggedIn(login:boolean):void{

    this.userLoggedIn=login
  }
  loggedOut(logout:boolean):void{
    this.userLoggedIn=logout
  }

}
