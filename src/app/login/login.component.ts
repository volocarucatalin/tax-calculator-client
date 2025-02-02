import { Component } from '@angular/core';
import {AuthService} from '../admin/services/auth.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Login} from '../admin/entityes/login';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  form!: FormGroup;
  constructor(private authService: AuthService,private fb: FormBuilder, private router :Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login : Login = new Login();
  loginData(){
    this.authService.login(this.login.email,this.login.password).subscribe(data =>{
      alert("you have login")
      this.router.navigateByUrl('/contractor');

    },error => alert("something went wrong"));

  }
}
