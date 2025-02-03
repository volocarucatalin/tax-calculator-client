import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { Contractor } from '../entityes/contractor';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ContractorService {

  baseURL = "http://localhost:8080/contractors/con/add";
  private authService = inject(AuthService);
  router = inject(Router);






  constructor(private http: HttpClient, router: Router) {
  }





  addContractor(contractor :Contractor){
    this.authService.addUser(contractor)
  }
}
