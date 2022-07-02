import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserLoginService } from '../services/user-login.service';

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
  passwordCtrl = this.fb.control('',[Validators.required,Validators.minLength(5)]);
  passwordCtrlConf = this.fb.control('');
 
  // userForm:FormGroup<{
  //   username: FormControl<string|null>;
  //   password: FormControl<string|null>;
  // }>;

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = this.passwordCtrl.value;
    let confirmPass = this.passwordCtrlConf.value
    return pass === confirmPass ? null : { notSame: true }
  }

  userForm = this.fb.group({
    username:this.usernameCtrl,
    password:this.passwordCtrl,
    passwordConf:this.passwordCtrlConf
  },{validators:this.checkPasswords});

  constructor(private fb:FormBuilder,private loginService:UserLoginService) {
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

    console.log(this.userForm.value);
    let user:User = this.userForm.value as User;
    // let user:User = new User(this.usernameCtrl.value,this.passwordCtrl.value);
    this.loginService.addUser(user);
    this.reset();
    this.loginService.logIn(user);

  }

  reset(){
    // this.usernameCtrl.setValue('');
    // this.passwordCtrl.setValue('');
    this.userForm.reset()
  }




}
