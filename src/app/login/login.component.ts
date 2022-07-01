import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userlogin:UserLoginService) { }

  ngOnInit(): void {
  }

  isLoged(login:string,pwd:string){
    this.userlogin.islogin(login,pwd);
  }
}
