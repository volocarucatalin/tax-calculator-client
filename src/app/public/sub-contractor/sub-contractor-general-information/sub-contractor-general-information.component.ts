import {Component, OnInit} from '@angular/core';
import {ContractorService} from '../../../admin/services/contractor.service';
import {SubContractorService} from '../../../admin/services/sub-contractor.service';

@Component({
  selector: 'app-sub-contractor-general-information',
  standalone: false,

  templateUrl: './sub-contractor-general-information.component.html',
  styleUrl: './sub-contractor-general-information.component.css'
})
export class SubContractorGeneralInformationComponent implements OnInit{

  invoices: any;
  subContractors: any;

  constructor(private contractorService: ContractorService , subContractorService: SubContractorService) {
    this.invoices = subContractorService.getAllSubContractorsInvoices().subscribe(
      data => {
        this.invoices = data;
      }
    )
  }

  ngOnInit(): void {
  }

  invoiceTotal(){
    return this.contractorService.calculateTotalPayment(this.invoices);
  }

  calculateTotalPaidInvoices(){

  }

  calculateTotalSubContractorsTax(){

  }

}
