import {Component} from '@angular/core';
import {AuthService} from '../../admin/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: false,

  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  goToLogIn() {
    return this.router.navigateByUrl('/login');
  }

  gotToSignUp(){
    return this.router.navigateByUrl('/contractor')
  }

  logout() {
    this.authService.logout();
  }

  protected readonly sessionStorage = sessionStorage;
}
