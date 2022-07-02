import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  loginService:UserLoginService;

  constructor(private router:Router,private _login:UserLoginService) { 
    this.loginService = _login;
  }

  ngOnInit(): void {
  }

  logOut(){
    this.loginService.logOut();
  }
}
