import { Component } from '@angular/core';
import {AuthService} from '../../admin/services/auth.service';

@Component({
  selector: 'app-homepage',
  standalone: false,

  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
constructor(private authService: AuthService) {
}

logout() {
  this.authService.logout();
}
}
