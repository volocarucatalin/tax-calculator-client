import { Component, OnInit } from '@angular/core';
import { Contractor } from '../../admin/entityes/contractor';
import { ContractorService } from '../../admin/services/contractor.service';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../../admin/services/auth.service';

@Component({
  selector: 'app-contractor',
  standalone: false,

  templateUrl:'./contractor.component.html',
  styleUrl: './contractor.component.css'
})
export class ContractorComponent implements OnInit {

  contractor : Contractor = new Contractor();

  constructor (private contractorService : ContractorService, private http: HttpClient,private authService: AuthService){}

  ngOnInit(): void {}



  addContractorData(){
    try{
    this.contractorService.addContractor(this.contractor);
    alert("Contractor data inserted")
    }
    catch(error){
      alert("Unable to insert contractor")
    }
  }

  logout(){
    this.authService.logout();
  }
}
