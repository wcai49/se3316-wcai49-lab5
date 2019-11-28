import { Component, OnInit } from '@angular/core';
import { SampleService} from '../sample.service';

@Component({
  selector: 'app-manage-report',
  templateUrl: './manage-report.component.html',
  styleUrls: ['./manage-report.component.scss']
})
export class ManageReportComponent implements OnInit {
songs: Object;

  constructor(private _http: SampleService) { }

  ngOnInit() {
    this._http.getData().subscribe((data:[]) => {
      let ReportArray = [];
      for(let i= 0; i < data.length; i++){
        if(data[i]['reported'] == true){
          ReportArray.push(data[i]);
        }
      }
      this.songs = ReportArray;
  })
  }

  reportConfirm(songId){
    let giveId = {
      id : songId
    }
    this._http.reportConfirm(giveId).subscribe(
          data => {
          if(data.body["type"]){
            console.log("POST has been sent ", data);
          }
          },
          error =>{}
  )
  window.location.reload();
  }
  
  cancelReport(songId){
    let cancelId = {
      id : songId
    }
    this._http.cancelReport(cancelId).subscribe(
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
