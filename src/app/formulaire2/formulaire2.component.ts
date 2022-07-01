import { Component, OnInit } from '@angular/core';
import { UserBis } from '../model/userBis';

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

  constructor() { }

  ngOnInit(): void {
  }



  register(value:UserBis){
    console.log(value.password);
    console.log(value.username);
    console.log("je m'enregistre");
    console.log(value);

  }


}
