import { Injectable } from '@angular/core';
import {User} from '../entityes/user';
import { HttpClient } from '@angular/common/http';
import {Login} from '../entityes/login';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registrationURL ="http://localhost:8080/auth/register"
  authURL = "http://localhost:8080/auth/authenticate"



  session: any;

  constructor(private httpClient : HttpClient, private router :Router) {
  }

  addUser(user :User){
    console.log(user);
    return this.httpClient.post(this.registrationURL,user)
  }



  login(email: string,password: string){
    console.log(email, password);

    let loginCredentials = new Login();
    loginCredentials.email = email;
    loginCredentials.password = password;


    const authResponse$ = this.httpClient.post(this.authURL, loginCredentials);


    this.storeSession(authResponse$);


    return authResponse$;
  }


  private storeSession(authResponse$: Observable<any>): void {
    authResponse$.subscribe(response => {
      sessionStorage.setItem(this.session, JSON.stringify(response));
    });
  }

  logout(){
    this.session = undefined
    sessionStorage.removeItem(this.session);
    this.router.navigateByUrl('/login');
  }
}
