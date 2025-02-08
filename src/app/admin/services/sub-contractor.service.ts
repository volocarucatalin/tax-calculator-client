import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubContractor } from '../entityes/sub-contractor';
import {Invoice} from '../entityes/invoice';


@Injectable({
  providedIn: 'root'
})
export class SubContractorService {
  baseURL = "http://localhost:8080";

  constructor(private httpClient : HttpClient) { }

  addSubContractor(subContractor : SubContractor){
    subContractor.contractorId = Number(sessionStorage.getItem('userId'));
    console.log(subContractor);

    return this.httpClient.post(this.baseURL + "/auth/register/sub-contractor",subContractor)
  }


  createInvoice( invoice : Invoice){
    invoice.subContractorId = Number(sessionStorage.getItem('userId'));
    const token = sessionStorage.getItem("token");

    let headers = {
      'Authorization': `Bearer ${token}`
    };
    return this.httpClient.post(this.baseURL +"/invoices/register",invoice ,{headers});
  }

}
