import { Component, OnInit, Input} from '@angular/core';
import {SampleService} from './sample.service';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  commentShow: Object;
  details: Object;
  reviews: Array<Object>;
  comment: Object;
  searchName: Object;
  sortType: string;
  constructor(private _http: SampleService, private _display: DisplayService) { }
   @Input() items: Object;
  ngOnInit() {
      this.sortType ='reviews';
   if(localStorage['loginStatus']){
     console.log(localStorage['loginStatus']);
     this.commentShow = {
       status: 'display'
     }
   }
   else
    this.commentShow = null;
  }
  
getSongDetails(index) {
  this._http.getDetail(index).subscribe(data => {
      this.details = data;
      this.reviews = this.details["reviews"];
      this.reviews.sort(this.compare('date'));
      this.items= null;
      console.log(this.reviews);
    });
}

goBack() {
  this._http.getData().subscribe((data:[]) => {
    data.sort(this.compare('reviews'));
    this.items = data;
    this.reviews = null;
    this.details = null;
  })
}

submit(){
    this.comment = {
        comment: (<HTMLTextAreaElement>document.getElementById('commentContent')).value,
        user: localStorage['user'],
        rate: (<HTMLSelectElement>document.getElementById('rateContent')).value,
        date: (<HTMLInputElement>document.getElementById('dateContent')).value,
        totalRate: (parseInt(this.details['rate'])* this.details['reviews'].length + parseInt((<HTMLSelectElement>document.getElementById('rateContent')).value)) / (this.details['reviews'].length+1)
    }
    
    this._http.commentPost(this.comment, this.details['_id']).subscribe(
          data => {
          console.log("POST has been sent ", data);
          },
          error =>{}
  )
       window.location.reload();
}

 compare(property){
         return function(obj1,obj2){
             if (property == 'reviews'){
                 var value1 = obj1[property].length;
             var value2 = obj2[property].length;
             return value2 - value1;
             }
             else if (property == 'rate'){
                 var value1 = obj1[property];
                 var value2 = obj2[property];
             return value2 - value1;
             }
             else if (property == 'name'){
                 var value1 = obj1[property];
                 var value2 = obj2[property];
             return value2 - value1;
             }
             else if (property == 'date'){
                var valueDate1 = Date.parse(obj1.date);
                var valueDate2 = Date.parse(obj2.date);
                console.log((valueDate1));
             return (valueDate2 - valueDate1);
             }
             
         }
    }
    search(){
    this.searchName = {
      Name : (<HTMLInputElement>document.getElementById('searchInput')).value
    };
    this._http.searchName(this.searchName).subscribe(
          data => {
            console.log("POST has been sent ", data);
            this.getSongDetails(data.body[0]._id);
          },
          error =>{}
  )
  }
  
  //change sort type
  changeSort(type){
      switch(type) {
          case 1:
              this._http.getData().subscribe((data:[]) => {
              data.sort(this.compare('reviews'));
              this.items = data;
              this.reviews = null;
              this.details = null;
  })
              break;
          case 2:
              this._http.getData().subscribe((data:[]) => {
              data.sort(this.compare('rate'));
              this.items = data;
              this.reviews = null;
              this.details = null;
  })
              break;
          case 3:
              this._http.getData().subscribe((data:[]) => {
              data.sort(this.compare('name'));
              this.items = data;
              this.reviews = null;
              this.details = null;
  })
              break;
      }
  }
}
