import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  logged:boolean=false;


  constructor(private router:Router,private login:UserLoginService) { }

  ngOnInit(): void {
    this.isLogged();
  }

  go(){
    this.router.navigate(["starwar"]);
  }

  isLogged():boolean{
    return this.logged = this.login.login;
  }

  logOut(){
    this.login.login = false;
  }
}
