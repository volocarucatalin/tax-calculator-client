import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {AuthService} from '../../admin/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private auth :AuthService) {
  }
  logout(){
    this.auth.logout();
  }

  protected readonly sessionStorage = sessionStorage;
}
