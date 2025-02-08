import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from './admin/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'tax-calxulator';

  displayMenu= false;
  displayContractorMenu= false;
  displaySubContractorMenu= false;
  currentRole: any;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }

    protected readonly sessionStorage = sessionStorage;
}
