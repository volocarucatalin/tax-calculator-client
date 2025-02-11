import {HttpClient, HttpHeaders} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Contractor} from '../entityes/contractor';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {SubContractor} from '../entityes/sub-contractor';

@Injectable({
  providedIn: 'root'
})

export class ContractorService {

  baseURL = "http://localhost:8080";

  private authService = inject(AuthService);
  router = inject(Router);


  constructor(private http: HttpClient, router: Router) {
  }


  private getAuthHeaders(): { [header: string]: string } {
    const token = sessionStorage.getItem("token");
    return { 'Authorization': `Bearer ${token}` };
  }


  addContractor(contractor: Contractor) {
    this.authService.addUserContractor(contractor).subscribe(data => {
      alert("Contractor data inserted")
    }, error => alert("Unable to insert Contractor"));
  }

  getAllSubContractors() {
    const contractorId = Number(sessionStorage.getItem("userId"));
    const headers =this.getAuthHeaders()

    return this.http.get(this.baseURL + "/sub-contractors/" + contractorId, {headers});

  }
  getAllInvoices(){
    const contractorId = Number(sessionStorage.getItem("userId"));
    const headers =this.getAuthHeaders()
    return this.http.get(this.baseURL + "/invoices/contractor/" + contractorId, {headers});
  }


  private getSubContractor(contractorId: number) {
    const headers = this.getAuthHeaders();
    return this.http.get<SubContractor>(this.baseURL +'/sub-contractors/get-sub/'+ contractorId, { headers });
  }


  updateSubContractor(subContractor: SubContractor) {
    const contractorId = Number(sessionStorage.getItem("userId"));
    const token = sessionStorage.getItem("token");

    let headers = this.getAuthHeaders()


   // return this.http.put(this.baseURL+"sub-contractor/update/" + subContractorId,{headers} );
  }

  deleteSubContractor(subContractorId: number) {
    let headers = this.getAuthHeaders()
    return this.http.delete(this.baseURL + "/sub-contractor/delete/" + subContractorId, {headers});
  }

}
