import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  users: Object;
  isSuperManager: String;
  constructor(private _http: SampleService) { }

  ngOnInit() {
    if(localStorage['loginStatus']== 'SuperManager')
      this.isSuperManager = 'Current Manager is SuperManager';
    else
      this.isSuperManager = null;
    this._http.getUsers().subscribe((data:[]) => {
      this.users = data;
      console.log(data);
    });
  }
  
  givePrivilege(userId){
    let giveId = {
      id : userId
    }
    this._http.givePrivilege(giveId).subscribe(
          data => {
          if(data.body["type"]){
            console.log("POST has been sent ", data);
          }
          },
          error =>{}
  )
  window.location.reload();
  }
  
  cancelPrivilege(userId){
    let cancelId = {
      id : userId
    }
    this._http.cancelPrivilege(cancelId).subscribe(
          data => {
          if(data.body["type"]){
            console.log("POST has been sent ", data);
          }
          },
          error =>{}
  )
  window.location.reload();
  }


  setDeactivated(userId){
    let giveId = {
      id : userId
    }
    this._http.setDeactivated(giveId).subscribe(
          data => {
          if(data.body["type"]){
            console.log("POST has been sent ", data);
          }
          },
          error =>{}
  )
  window.location.reload();
  }
  
  cancelDeactivated(userId){
    let cancelId = {
      id : userId
    }
    this._http.cancelDeactivated(cancelId).subscribe(
          data => {
          if(data.body["type"]){
            console.log("POST has been sent ", data);
          }
          },
          error =>{}
  )
  window.location.reload();
  }
}
