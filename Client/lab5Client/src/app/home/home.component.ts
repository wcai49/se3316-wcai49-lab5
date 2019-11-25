import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  items: Object;
  reviews: Object;
  constructor(private _http: SampleService) {}
  
  
  ngOnInit() {
      this._http.getData().subscribe((data:[]) => {
      for(let i= 0; i < data.length; i++){
        if(data[i]["hidden"] == true){
          data.splice(i, 1);
        }
      }
      data.sort(this.compare('reviews'));
      this.items = data;
      console.log(data);
    });
  }
  
  compare(property){
         return function(obj1,obj2){
             var value1 = obj1[property].length;
             var value2 = obj2[property].length;
             return value2 - value1;
         }
    }

}
