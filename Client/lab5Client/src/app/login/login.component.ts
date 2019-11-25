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
  
  account: Object;
  deactivatedMsg: String;
  constructor(private _http: SampleService, private _display: DisplayService, private router: Router) {
    
  }

  ngOnInit() {
  }
  
  loginPost(){
    this.account = {
        username: (<HTMLInputElement>document.getElementById('username')).value,
        password: (<HTMLInputElement>document.getElementById('password')).value,
      }
      
     this._http.loginPost(this.account).subscribe(
          data => {
          console.log("POST has been sent ", data);
          console.log("POST has been sent ", data.body["type"]);
          if(data.body["type"] == 'deactivated'){
            this.deactivatedMsg = 'Sorry, account is deactivated, please contact the Manager';
          }
          else{
            this.deactivatedMsg = null;
          }
          if(data.body["type"]){
            localStorage.setItem('token', data.body["token"].toString());
            /*this._display.loginAuthen(data.body["type"]);
            this._display.storeUser(data.body["data"].username);*/
            localStorage.setItem('user', data.body["data"].username);
            localStorage.setItem('loginStatus', data.body["type"]);
            setTimeout( ()=>{this.router.navigateByUrl('/')}, 3000);
          }
          },
          error =>{}
  )
  }
  

  
}
