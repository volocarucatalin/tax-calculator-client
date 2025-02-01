import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contractor } from '../entityes/contractor';

@Injectable({
  providedIn: 'root'
})

export class ContractorService {

  baseURL = "http://localhost:8080/contractors/con/add";



  constructor(private http: HttpClient) { }




 

  addContractor(contractor :Contractor){
    console.log(contractor)
    return this.http.post(this.baseURL,contractor)
  }
}
