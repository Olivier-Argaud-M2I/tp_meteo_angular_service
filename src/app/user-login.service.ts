import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  login:boolean=false;

  constructor(private route:Router) { }



  islogin(login:string,pwd:string){
    if(login === 'olivier' && pwd === 'admin'){
      this.login = true;
      this.route.navigate(['meteo']);

    }
    return this.login
  }
}
