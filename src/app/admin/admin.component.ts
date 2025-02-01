import { Component } from '@angular/core';
import {User} from './entityes/user';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-public',
  standalone: false,

  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent{

  ngOnInit(): void {
  }

  user :User = new User();

  constructor(private authService: AuthService) {}

  addUserData(){
    this.authService.addUser(this.user).subscribe(data =>{
      alert("User data inserted")
    },error => alert("Unable to insert User data"));
  }
}
