import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { DisplayService } from '../display.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailInput: string;
  emailInvalid: string;
  passwordInput: string;
  account: Object;
  deactivatedMsg: String;
  constructor(private _http: SampleService, private _display: DisplayService, private router: Router) {
    
  }

  ngOnInit() {
   this.emailInvalid = null;
  }
  
  loginPost(){
    this.emailInput = (<HTMLInputElement>document.getElementById('username')).value;
    this.passwordInput = (<HTMLInputElement>document.getElementById('password')).value;
    let regExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (this.emailInput == '')
    {
      this.emailInvalid = 'Please enter a email!';
    }
    else if(this.emailInput == 'site manager'){
      this.emailInput = 'site Manager';
      this.emailInvalid = null;
    }
    else if(!regExp.test(this.emailInput))
    {
      this.emailInvalid = 'Invalid email! Please check your username.';
    }
    
    else if (this.passwordInput == ''){
      this.emailInvalid = 'Please enter your password!';
    }
    
    
    
    
    this.account = {
        username: (<HTMLInputElement>document.getElementById('username')).value,
        password: (<HTMLInputElement>document.getElementById('password')).value,
      }
      
     this._http.loginPost(this.account).subscribe(
        
          data => {
            
          /*console.log("POST has been sent ", data);
          console.log("POST has been sent ", data.body["type"]);*/
          if(data.body["type"] == 'deactivated'){
            this.deactivatedMsg = 'Sorry, account is deactivated, please contact the Manager by email: wcai49@uwo.ca';
          }
          else{
            this.deactivatedMsg = null;
          }
          if(data.body["type"] == true || data.body["type"]== 'SuperManager' || data.body["type"]== 'manager'){
            localStorage.setItem('token', data.body["token"].toString());
            /*this._display.loginAuthen(data.body["type"]);
            this._display.storeUser(data.body["data"].username);*/
            localStorage.setItem('user', data.body["data"].username);
            localStorage.setItem('loginStatus', data.body["type"]);
            setTimeout( ()=>{this.router.navigateByUrl('/')}, 3000);
          }
          else{
            this.emailInvalid = data.body["data"];
          }
          },
          error =>{
            console.log(error);
          }
  )
    
    }
}