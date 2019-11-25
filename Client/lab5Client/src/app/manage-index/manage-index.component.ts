import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-index',
  templateUrl: './manage-index.component.html',
  styleUrls: ['./manage-index.component.scss']
})
export class ManageIndexComponent implements OnInit {
  isSuper: Object;
  constructor() { }

  ngOnInit() {
    if(localStorage.loginStatus=='SuperManager')
      this.isSuper = {
        status: 'display'
      };
    else
      this.isSuper = null;
  }

}
