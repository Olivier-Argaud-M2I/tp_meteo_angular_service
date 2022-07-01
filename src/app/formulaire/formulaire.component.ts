import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/user';
import { UserBis } from '../model/userBis';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {

    // formulaire pilloté par code

    // olivier => valeure par defaut
    // const password = new FormControl('olivier');
    // console.log(password.dirty);
    // console.log(password.value);
    // console.log(password.hasError('required'));


    // const form = new FormGroup({
    //   username: new FormControl('toto'),
    //   password: new FormControl('titi')
    // });
    // console.log(form.value);
    // console.log(form.get('username'));

  }



  // register(value:User){
  //   console.log(value.password);
  //   console.log(value.username);
  //   console.log("je m'enregistre");
  //   console.log(value);

  // }

  register(value:UserBis){
    console.log(value.password);
    console.log(value.username);
    console.log("je m'enregistre");
    console.log(value);

  }



}
