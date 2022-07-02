import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginService:UserLoginService;

  constructor(private _loginService:UserLoginService) { 
    this.loginService = _loginService;
  }

  ngOnInit(): void {
  }

}
