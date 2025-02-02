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
        }
      });
  }

  logout() {
    this.session = undefined
    sessionStorage.removeItem(this.session);
    this.router.navigateByUrl('/login');
  }
}
