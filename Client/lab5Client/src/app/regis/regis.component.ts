import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.scss']
})
export class RegisComponent implements OnInit {
  account: Object;
  constructor( private _http: SampleService, private router: Router) { }

  ngOnInit() {
  }
  
  signUp(){
    this.account = {
      username: (<HTMLInputElement>document.getElementById('username')).value,
      password: (<HTMLInputElement>document.getElementById('password')).value
    }
    this._http.signupPost(this.account).subscribe(
          data => {
          console.log("POST has been sent ", data);
          console.log("POST has been sent ", data.body["type"]);
          if(data.body["type"]){
            localStorage.setItem('token', data.body["token"].toString());
            /*this._display.loginAuthen(data.body["type"]);
            this._display.storeUser(data.body["data"].username);*/
            localStorage.setItem('user', data.body["data"].username);
            localStorage.setItem('loginStatus', data.body["type"]);
            setTimeout( ()=>{this.router.navigateByUrl('/login')}, 3000);
          }
          },
          error =>{}
  )
    
  }
}
