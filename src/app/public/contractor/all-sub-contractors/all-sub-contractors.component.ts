import {Component, Inject, OnInit} from '@angular/core';
import {ContractorService} from '../../../admin/services/contractor.service';

@Component({
  selector: 'app-all-sub-contractors',
  standalone: false,

  templateUrl: './all-sub-contractors.component.html',
  styleUrl: './all-sub-contractors.component.css'
})


export class AllSubContractorsComponent implements OnInit{
  contractorService = Inject(ContractorService);
  subContractor: any;

  ngOnInit(): void {
    let response = this.contractorService.getAllSubContractors();
    response.subscribe((data :any) => this.subContractor = data)
  }


}
