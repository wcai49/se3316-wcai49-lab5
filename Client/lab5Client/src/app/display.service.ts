import { Injectable } from '@angular/core';


@Injectable()
export class DisplayService {
  username: String;
  constructor() { 
    
    
  }
  
  /*
  * This function receives a callback funtion to send back the aynchronous response from the server.
  */
  
  /*loginAuthen(loginInfo) {
    this.isLogin = localStorage["loginStatus"];
    console.log(this.isLogin);
  }
  
  checkLogin() {
    return localStorage["loginStatus"];
  }
  
  checkLogout(){
    this.isLogin = false;
    return this.isLogin;
  }
  
  storeUser(username){
    this.username = username;
  }
  
  checkUsername(){
    return this.username;
  }*/
}