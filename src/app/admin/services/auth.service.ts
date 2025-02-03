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

  registrationURL = "http://localhost:8080/auth/register"
  contractorAddURL = "http://localhost:8080/contractors/con/add"
  subContractorAddURL = "http://localhost:8080/sub-contractors/sub/add"
  authURL = "http://localhost:8080/auth/authenticate"

  session: any;
  user: User = new User();

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


    addUser(contractorData: Contractor): Observable<any> | void {
        const CONTRACTOR_ROLE = 'CONTRACTOR';

        try {
            if (!contractorData || contractorData.role !== CONTRACTOR_ROLE) {
                alert('Invalid contractor data');
                return;
            }

            this.mapContractorToUser(this.user, contractorData);

            // HTTP requests
            this.httpClient.post(this.contractorAddURL, contractorData).subscribe();
            console.log(this.user);

            return this.httpClient.post(this.registrationURL, this.user);

        } catch (e) {
            console.error('Error in addUser:', e);
            alert('An error occurred. Please try again.');
            return;
        }
    }

    private mapContractorToUser(user: User, contractor: Contractor): void {
        user.role = contractor.role;
        user.email = contractor.email;
        user.password = contractor.password;
        user.firstName = contractor.firstName;
        user.lastName = contractor.lastName;
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


  getRoleByToken(token: any) {
    let _token = token.split('.')[1];
    this.session = JSON.parse(atob(_token));
    console.log(this.session);
  }

  decodingToken(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('/-/g', '+').replace('/_/g', '/');
    const jasonPlayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jasonPlayload);
  }
}
