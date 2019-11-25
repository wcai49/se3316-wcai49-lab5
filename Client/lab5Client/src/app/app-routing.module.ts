import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { IntroComponent } from './intro/intro.component';
import { DetailsComponent } from './details.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { ManageIndexComponent} from './manage-index/manage-index.component';
import { ManageSongComponent} from './manage-song/manage-song.component';
import { ManageUserComponent} from './manage-user/manage-user.component';


const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'regis', component: RegisComponent},
  { path: 'detail', component: DetailsComponent},
  { path: 'addMusic', component: AddMusicComponent},
  { path: 'manageIndex', component: ManageIndexComponent},
  { path: 'manageIndex/manageSongs', component: ManageSongComponent},
  { path: 'manageIndex/manageUsers', component: ManageUserComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
