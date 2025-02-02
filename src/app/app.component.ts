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
  decodeToken: any;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.navBarDisplay();
  }

  navBarDisplay(){
    this.decodeToken = this.authService.decodingToken(this.authService.getSessionToken());
    console.log(this.decodeToken);

  }
}
