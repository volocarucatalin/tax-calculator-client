import {Injectable} from '@angular/core';
import {User} from '../entityes/user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Contractor} from '../entityes/contractor';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  contractorRegistrationURL = "http://localhost:8080/auth/register/contractor"
  subContractorAddURL = "http://localhost:8080/register/sub-contractor"
  authURL = "http://localhost:8080/auth/authenticate"

  session: any;
  role: any;


  constructor(private httpClient: HttpClient, private router: Router) {
    this.session = AuthService.getSessionToken();
    this.role = sessionStorage.getItem('role');
  }

  static getSessionToken(): any {
    const token = sessionStorage.getItem('token');
    try {

      return token ? JSON.parse(token) : null;
    } catch (e) {

      return token;
    }

  }


    addUserContractor(contractorData: Contractor) {

            return this.httpClient.post(this.contractorRegistrationURL, contractorData)
    }

  login(loginCredentials: { email: string, password: string }) {
    console.log(loginCredentials.email, loginCredentials.password);
    return this.httpClient.post(this.authURL, loginCredentials)
      .subscribe((response: any) => {
        const token = response?.token;
        const userId = response?.userId;
        if (token) {
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('userId',userId);
          sessionStorage.setItem('role',response?.role);
          console.log(token);
        }

      });
  }

  logout() {
    this.session = null;
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }




}
