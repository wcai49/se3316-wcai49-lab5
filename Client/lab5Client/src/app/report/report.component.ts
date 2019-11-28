import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  items: Object;
  reportObj: Object;
  constructor(private _http: SampleService) { }

  ngOnInit() {
    this._http.getData().subscribe((data:[]) => {
      for(let i= 0; i < data.length; i++){
        if(data[i]["hidden"] == true){
          data.splice(i, 1);
        }
      }
      this.items = data;
    });
  }
  
  //report the song
  report(songId){
    this.reportObj = {
      id: songId
    };
    this._http.report(this.reportObj).subscribe(
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
