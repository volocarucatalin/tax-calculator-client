import { Component, OnInit } from '@angular/core';
import { SubContractor } from '../../admin/entityes/sub-contractor';
import { SubContractorService } from '../../admin/services/sub-contractor.service';
import {ContractorService} from '../../admin/services/contractor.service';

@Component({
  selector: 'app-sub-contractor',
  standalone: false,

  templateUrl: './sub-contractor.component.html',
  styleUrl: './sub-contractor.component.css'
})

export class CreateSubContractor implements OnInit {
  subContractor : SubContractor = new SubContractor()

  constructor(private subContractorService : SubContractorService , private contractorService:ContractorService){}


  ngOnInit(): void {
  }

  addSubContractorData(){
    this.subContractorService.addSubContractor(this.subContractor).subscribe(data =>{
      alert("SubContractor data inserted")
    },error => alert("Unable to insert SubContractor"))
  }
}
