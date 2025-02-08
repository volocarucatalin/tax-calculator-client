import {Component, Inject, OnInit} from '@angular/core';
import {ContractorService} from '../../../admin/services/contractor.service';
import {SubContractor} from '../../../admin/entityes/sub-contractor';

@Component({
  selector: 'app-all-sub-contractors',
  standalone: false,

  templateUrl: './all-sub-contractors.component.html',
  styleUrl: './all-sub-contractors.component.css'
})


export class AllSubContractorsComponent implements OnInit{
  subContractor: any;

  constructor(private contractorService: ContractorService
  ) {
    console.log("hello");
  }
  ngOnInit(): void {
    let response = this.contractorService.getAllSubContractors();
    response.subscribe((data :any) => this.subContractor = data)
  }


  onEdit(data: SubContractor) {
    this.subContractor = data;
  }
}
