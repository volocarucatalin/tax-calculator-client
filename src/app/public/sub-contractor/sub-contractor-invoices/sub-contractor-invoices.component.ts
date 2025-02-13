import {Component, OnInit} from '@angular/core';
import {SubContractorService} from '../../../admin/services/sub-contractor.service';
import {ContractorService} from '../../../admin/services/contractor.service';
import {Invoice} from '../../../admin/entityes/invoice';

@Component({
  selector: 'app-sub-contractor-invoices',
  standalone: false,

  templateUrl: './sub-contractor-invoices.component.html',
  styleUrl: './sub-contractor-invoices.component.css'
})
export class SubContractorInvoicesComponent implements OnInit {

  invoices: any;
  totalPayment :any ;
  invoice :any;

  constructor(private subContractorService: SubContractorService ,private contractorService: ContractorService) {

  }

  ngOnInit(): void {
    let response = this.subContractorService.getAllSubContractorsInvoices();
    response.subscribe(data => {
      this.invoices = data;
    })
  }

  checkStatus(invoice:any){
    return invoice.status == 'PENDING';
  }

  calculateTotalPayment(invoice: any) {
    return this.contractorService.calculateTotalPayment(invoice);
  }
  calculateTax(invoice: any) {
    return this.contractorService.calculateTax(invoice);
  }

  calculateReceivingMoney(invoice: any){
    return this.contractorService.calculateReceivingMoney(invoice);
  }

  onDelete(invoice: Invoice) {
    this.invoice = invoice;
  }
  deleteInvoice() {
    this.subContractorService.deleteInvoice(this.invoice.invoiceId).subscribe(
      (response:any) => {
        console.log("Invoice has been deleted"+response);
      }, (error:any) => {
        console.log("Unable to delete invoice" + error);})
  }
}
