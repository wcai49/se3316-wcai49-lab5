import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  users: Object;
  constructor(private _http: SampleService) { }

  ngOnInit() {
    this._http.getUsers().subscribe((data:[]) => {
      this.users = data;
      console.log(data);
    });
  }
  
  givePrivilege(){
    
  }
  
  cancelPrivilege(){
    
  }

}
