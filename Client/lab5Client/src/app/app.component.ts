import { Component, OnInit} from '@angular/core';
import { DisplayService } from './display.service';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'lab5Client';
  loginShow: Object;
  logoutShow: Object;
  username: String;
  searchName: Object;
  managerShow: Object;
  constructor(private _display: DisplayService, private _http: SampleService) {
    this.loginShow = {
      status: 'show'
    };
    this.logoutShow = null;
    this.managerShow = null;
  }
  
  
  ngOnInit(){
    console.log('Login status is : ' + localStorage['loginStatus']);
    if(localStorage['loginStatus']){
      this.loginShow = null;
      this.logoutShow = {
        status: 'show'
      };
      this.username = localStorage["user"];
    }
    if(localStorage['loginStatus']== 'manager' || localStorage['loginStatus']=='SuperManager')
      this.managerShow = {
        status: 'show'
      }
      
  }
  
  signOut() {
    localStorage.clear();
    console.log('Login status is : ' + localStorage['loginStatus']);
      this.logoutShow = null;
      this.loginShow = {
        status: 'show'
      };
      this.username= null;
      this.managerShow = null;
    
  }
  
  
}
