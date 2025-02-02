import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-public',
  standalone: false,

  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent {
  constructor(
    private router: Router) {
  }

  goToLogIn(){
    return this.router.navigateByUrl('/login');
  }
}
