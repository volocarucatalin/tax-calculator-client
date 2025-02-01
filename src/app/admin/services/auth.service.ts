import { Injectable } from '@angular/core';
import {User} from '../entityes/user';
import { HttpClient } from '@angular/common/http';
import {Login} from '../entityes/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registrationURL ="http://localhost:8080/auth/register"
  authURL = "http://localhost:8080/auth/authenticate"



  sessions: any;
  authResponse: any;
  constructor(private httpClient : HttpClient) {
  }

  addUser(user :User){
    console.log(user);
    return this.httpClient.post(this.registrationURL,user)
  }



  login(email: string,password: string){
    console.log(email,password);
    let login = new Login();
    login.email = email;
    login.password = password;
    return this.httpClient.post(this.authURL,login);
  }

}
