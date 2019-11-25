import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { SampleService } from './sample.service';
import { HttpClientModule } from '@angular/common/http';
import { IntroComponent } from './intro/intro.component';
import { DetailsComponent } from './details.component';
import { DisplayService } from './display.service';
import { AddMusicComponent } from './add-music/add-music.component';
import { ManageIndexComponent } from './manage-index/manage-index.component';
import { ManageSongComponent } from './manage-song/manage-song.component';
import { ManageUserComponent } from './manage-user/manage-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisComponent,
    IntroComponent,
    DetailsComponent,
    AddMusicComponent,
    ManageIndexComponent,
    ManageSongComponent,
    ManageUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SampleService,
    DisplayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
