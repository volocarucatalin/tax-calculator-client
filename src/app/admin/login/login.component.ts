import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Login} from '../entityes/login';

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
    this.login = {
      email: this.login.email,
      password: this.login.password,
    };

    this.authService.login(this.login);
    this.router.navigateByUrl('/contractorInfo');

  }

}
