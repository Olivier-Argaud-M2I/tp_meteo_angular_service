import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  users:User[]=[];

  loggedUser:User|null=null;

  isLogged:boolean=false;

  constructor(private route:Router) { }

  islogin(){
    return this.isLogged;
  }

  logIn(user:User){

    this.users.forEach((utilisateur)=>{
      if(utilisateur.toString()===user.toString()){
        this.isLogged = true;
        this.loggedUser = utilisateur;
        this.route.navigate(['meteo']);
      }
    })
    return this.isLogged
  }

  logOut(){
    this.isLogged = false;
    this.loggedUser = null;
    this.route.navigate(['login']);
  }

  addUser(user:User){
    this.users.push(user);
  }

}
