import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {
  music: Object;
  constructor(private _http: SampleService) { }

  ngOnInit() {
  }
  
  addMusic(){
      this.music = {
        name: (<HTMLInputElement>document.getElementById('musicName')).value,
        album: (<HTMLInputElement>document.getElementById('musicAlbum')).value,
        artist: (<HTMLInputElement>document.getElementById('musicArtist')).value
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
