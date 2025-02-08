import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubContractor } from '../entityes/sub-contractor';


@Injectable({
  providedIn: 'root'
})
export class SubContractorService {
  baseURL = "http://localhost:8080/auth/register/sub-contractor";

  constructor(private httpClient : HttpClient) { }

  addSubContractor(subContractor : SubContractor){
    subContractor.contractorId = Number(sessionStorage.getItem('userId'));
    console.log(subContractor);

    return this.httpClient.post(this.baseURL,subContractor)
  }

}
