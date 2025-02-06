import {HttpClient, HttpHeaders} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Contractor} from '../entityes/contractor';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ContractorService {

  baseURL = "http://localhost:8080/";

  private authService = inject(AuthService);
  router = inject(Router);


  constructor(private http: HttpClient, router: Router) {
  }


  addContractor(contractor: Contractor) {
    this.authService.addUserContractor(contractor).subscribe(data => {
      alert("Contractor data inserted")
    }, error => alert("Unable to insert Contractor"));
  }

  getAllSubContractors() {
    const contractorId = Number(sessionStorage.getItem("userId"));
    const token = sessionStorage.getItem("token");

    let headers = {
      'Authorization': `Bearer ${token}`
    };


    return this.http.get(this.baseURL + "sub-contractors/" + contractorId, {headers});

  }
}
