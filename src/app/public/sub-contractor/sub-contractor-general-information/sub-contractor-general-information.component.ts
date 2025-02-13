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
    let total = 0;
    for (let i = 0; i < this.invoices.length; i++) {
      if(this.invoices[i].status == 'PAID'){
        total++;
      }
    }
   return total;
  }



  calculateTotalPaidInvoices(){
    let total = 0;
    for (let i = 0; i < this.invoices.length; i++) {
      if(this.invoices[i].status == 'PAID'){
        const totalInvoice = this.contractorService.calculateReceivingMoney(this.invoices[i])
        total += totalInvoice;
      }
    }
    return total;
  }

  calculateTotalSubContractorsTax(){
    let total = 0;
    for (let i = 0; i < this.invoices.length; i++) {
      if(this.invoices[i].status == 'PAID') {
        const totalInvoice = this.contractorService.calculateTax(this.invoices[i])
        total += totalInvoice;
      }
    }
    return total;



  }
}
