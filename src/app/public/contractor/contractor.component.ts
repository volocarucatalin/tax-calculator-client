import { Component, OnInit } from '@angular/core';
import { Contractor } from '../../admin/entityes/contractor';
import { ContractorService } from '../../admin/services/contractor.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contractor',
  standalone: false,
  
  templateUrl: './contractor.component.html',
  styleUrl: './contractor.component.css'
})
export class ContractorComponent implements OnInit {

  contractor : Contractor = new Contractor();

  constructor (private contractorService : ContractorService, private http: HttpClient){}

  ngOnInit(): void {}



  addContractorData(){
    this.contractorService.addContractor(this.contractor).subscribe(data =>{
      alert("Contractor data inserted")
    },error => alert("Unable to insert Contractor"))
  }
}
