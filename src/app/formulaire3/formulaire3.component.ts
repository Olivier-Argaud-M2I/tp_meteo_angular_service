import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-formulaire3',
  templateUrl: './formulaire3.component.html',
  styleUrls: ['./formulaire3.component.css']
})
export class Formulaire3Component implements OnInit {

  // usernameCtrl: FormControl<string|null>;
  // passwordCtrl: FormControl<string|null>;

  // usernameCtrl = new FormControl('');
  // passwordCtrl = new FormControl('');
  usernameCtrl = this.fb.control('',[Validators.required,Validators.minLength(3)]);
  passwordCtrl = this.fb.control('',[Validators.required]);

  // userForm:FormGroup<{
  //   username: FormControl<string|null>;
  //   password: FormControl<string|null>;
  // }>;

  userForm = this.fb.group({
    username:this.usernameCtrl,
    password:this.passwordCtrl
  });

  constructor(private fb:FormBuilder,private userlogin:UserLoginService) {
    // this.usernameCtrl = fb.control('');
    // this.passwordCtrl = fb.control('');

    // this.userForm = fb.group({
    //   username:'',
    //   password:''
    // });

  }

  ngOnInit(): void{
  }

  register(){

    console.log(this.userForm.value as User);
    let user:User = this.userForm.value as User;
    this.userlogin.islogin(user.username,user.password);

  }

  reset(){
    // this.usernameCtrl.setValue('');
    // this.passwordCtrl.setValue('');
    this.userForm.reset()
  }


}
