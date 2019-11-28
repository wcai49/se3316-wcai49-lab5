import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SampleService {
  isLogin: boolean;
  constructor(private http: HttpClient) { 
    
    
  }
  
  /*
  * This function receives a callback funtion to send back the aynchronous response from the server.
  */
  getData() {
      return this.http.get('/api');
  }
  
  loginPost(loginData) {
    /*return new Promise ((resolve, reject) => {*/
      return this.http.post('/account/authenticate', loginData, {
      observe: 'response'
    });
    /*});*/
}

  getDetail(_id){
    return this.http.get('/api/'+ _id);
  }
  
  loginAuthen(loginInfo) {
    this.isLogin = loginInfo;
    console.log(loginInfo);
  }
  
  //post comment
  commentPost(comment, _id){
    console.log('Comment added to: ' + _id);
    return this.http.put('/api/'+ _id + '/comment', comment, {
      observe: 'response'
    });
  }
  
  //signup POST
  signupPost(account){
    return this.http.post('/account/signup', account, {
      observe: 'response'
    });
  }
  
  //create a new music
  createMusic(music){
    return this.http.post('/api/create', music, {
      observe: 'response'
    });
  }
  
  //search for a music
  searchName(name){
    return this.http.post('/api/search',name , {
      observe: 'response'
    });
  }
  
  
  //return all the users
  getUsers(){
    return this.http.get('/account/users');
  }
  
  //give Privilege
  givePrivilege(id){
    return this.http.put('/account/giveP', id, {
      observe: 'response'
    });
  }
  
  //cancel Privilege
  cancelPrivilege(id){
    return this.http.put('/account/cancelP', id, {
      observe: 'response'
    });
  }
  
  //give Privilege
  setDeactivated(id){
    return this.http.put('/account/setDe', id, {
      observe: 'response'
    });
  }
  
  //cancel Privilege
  cancelDeactivated(id){
    return this.http.put('/account/cancelDe', id, {
      observe: 'response'
    });
  }
  
  //set hide songs
  setHide(id){
    return this.http.put('/api/setHide', id, {
      observe: 'response'
    });
  }
  
  //cancel Privilege
  cancelHide(id){
    return this.http.put('/api/cancelHide', id, {
      observe: 'response'
    });
  }
  
  //report the song Copyright
  report(songId){
    return this.http.put('/api/report',songId,{
      observe: 'response'
    });
  }
  
  reportConfirm(songId){
    return this.http.put('/api/reportConfirm',songId,{
      observe: 'response'
    });
  }
  
  //cancel report
  cancelReport(songId){
    return this.http.put('/api/cancelReport', songId, {
      observe: 'response'
    });
  }
}