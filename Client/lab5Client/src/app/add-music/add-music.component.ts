import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {
  music: Object;
  errorMsg: string;
  constructor(private _http: SampleService) { }

  ngOnInit() {
  }
  
  addMusic(){
      var title =  (<HTMLInputElement>document.getElementById('musicName')).value;
      var album =  (<HTMLInputElement>document.getElementById('musicAlbum')).value;
      
      if(title == '' || album == '')
        this.errorMsg = 'Title and Album must not be empty!';
    
      else{
      this.errorMsg = null;
      this.music = {
        name: (<HTMLInputElement>document.getElementById('musicName')).value,
        album: (<HTMLInputElement>document.getElementById('musicAlbum')).value,
        artist: (<HTMLInputElement>document.getElementById('musicArtist')).value,
        year: (<HTMLInputElement>document.getElementById('musicYear')).value,
        track: (<HTMLInputElement>document.getElementById('musicTrack')).value,
        genre: (<HTMLInputElement>document.getElementById('musicGenre')).value
      }
      this._http.createMusic(this.music).subscribe(
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

}
