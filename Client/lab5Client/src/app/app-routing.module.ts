import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { IntroComponent } from './intro/intro.component';
import { DetailsComponent } from './details.component';
import { AddMusicComponent } from './add-music/add-music.component';


const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'regis', component: RegisComponent},
  { path: 'detail', component: DetailsComponent},
  { path: 'addMusic', component: AddMusicComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
