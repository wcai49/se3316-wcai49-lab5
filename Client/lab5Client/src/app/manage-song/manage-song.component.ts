import { Component, OnInit } from '@angular/core';
import { SampleService} from '../sample.service';

@Component({
  selector: 'app-manage-song',
  templateUrl: './manage-song.component.html',
  styleUrls: ['./manage-song.component.scss']
})
export class ManageSongComponent implements OnInit {
  songs: Object;
  constructor(private _http: SampleService) { }

  ngOnInit() {
    this._http.getData().subscribe((data:[]) => {
      data.sort(this.compare('reviews'));
      this.songs = data;
      console.log(data);
  })
    
  }

    compare(property){
             return function(obj1,obj2){
                 var value1 = obj1[property].length;
                 var value2 = obj2[property].length;
                 return value2 - value1;
             }
    }
    
    
    setHide(songId){
    let giveId = {
      id : songId
    }
    this._http.setHide(giveId).subscribe(
          data => {
          if(data.body["type"]){
            console.log("POST has been sent ", data);
          }
          },
          error =>{}
  )
  window.location.reload();
  }
  
  cancelHide(songId){
    let cancelId = {
      id : songId
    }
    this._http.cancelHide(cancelId).subscribe(
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
