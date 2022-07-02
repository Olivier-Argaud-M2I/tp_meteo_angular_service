import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserBis } from '../model/userBis';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-formulaire2',
  templateUrl: './formulaire2.component.html',
  styleUrls: ['./formulaire2.component.css']
})
export class Formulaire2Component implements OnInit {

  user:UserBis={
    password:"titi",
    username:"toto"
  }
  
  loginError:boolean=false;

  constructor(private loginService:UserLoginService,private router:Router) { }

  ngOnInit(): void {
  }




  register(value:UserBis){
    console.log(value.password);
    console.log(value.username);
    console.log("je m'enregistre");
    console.log(value);

    if(!this.loginService.logIn(value as User)){
      this.loginError=true;
      setTimeout(() => {
        this.loginError=false;
      }, 2000);
    }

  }

  go(){
    this.router.navigate(['formulaire3']);
  }

}
