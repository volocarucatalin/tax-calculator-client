import {Injectable} from '@angular/core';
import {User} from '../entityes/user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registrationURL = "http://localhost:8080/auth/register"
  authURL = "http://localhost:8080/auth/authenticate"



  session: any;
  constructor(private httpClient: HttpClient, private router: Router) {
      this.session = AuthService.getSessionToken();
  }

  static getSessionToken(): any {
    const token = sessionStorage.getItem('token');
    try {

      return token ? JSON.parse(token) : null;
    } catch (e) {

      return token;
    }

  }


  addUser(user: User) {
    console.log(user);
    return this.httpClient.post(this.registrationURL, user)

  }


  login(loginCredentials: { email: string, password: string }) {
    console.log(loginCredentials.email, loginCredentials.password);

    return this.httpClient.post(this.authURL, loginCredentials)
      .subscribe((response: any) => {
        const token = response?.token;
        if (token) {
          sessionStorage.setItem('token', token);
          console.log(token);
          this.router.navigateByUrl('/home');

        }

      });
  }

  logout() {
    this.session = null;
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  getSessionToken(): any {
    const token = sessionStorage.getItem('token');
    try {
      return token ? JSON.parse(token) : null;
    } catch (e) {
      return token;
    }
  }


  getRoleByToken(token:any){
    let _token = token.split('.')[1];
    this.session = JSON.parse(atob(_token));
    console.log(this.session);
  }

  decodingToken(token: string){
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('/-/g', '+').replace('/_/g', '/');
    const  jasonPlayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jasonPlayload);
  }
}
