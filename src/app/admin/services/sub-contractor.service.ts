import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubContractor } from '../entityes/sub-contractor';


@Injectable({
  providedIn: 'root'
})
export class SubContractorService {
  baseURL = "http://localhost:8080/sub-contractors/sub/add";

  constructor(private httpClient : HttpClient) { }

  addSubContractor(subContractor : SubContractor){
    console.log(subContractor);

    return this.httpClient.post(this.baseURL,subContractor)
  }
  

}
