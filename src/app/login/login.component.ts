import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userlogin:UserLoginService,private router:Router) { }

  ngOnInit(): void {
  }

  isLoged(login:string,pwd:string){
    let user:User = new User(login,pwd); 
    this.userlogin.logIn(user);
  }


  go(){
    this.router.navigate(['formulaire3']);
  }
}
