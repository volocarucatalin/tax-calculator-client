import {Component, OnInit} from '@angular/core';
import {ContractorService} from '../../../admin/services/contractor.service';
import {Invoice} from '../../../admin/entityes/invoice';

@Component({
  selector: 'app-all-invoices-contractor',
  standalone: false,

  templateUrl: './all-invoices-contractor.component.html',
  styleUrl: './all-invoices-contractor.component.css'
})
export class AllInvoicesContractorComponent implements OnInit {
  invoices: any;
  invoice :any;
  constructor(private contractorService: ContractorService) { }

  ngOnInit(): void {
    let response = this.contractorService.getAllInvoices().subscribe(data => {
      this.invoices = data;
    })
  }

  onEditStatusPay(invoice: any) {
    invoice.status ="PAID";
    this.invoice = invoice;

    this.updateInvoice();
  }
  onEditStatusCanceled(invoice: any) {
    invoice.status = "CANCELED";
    this.updateInvoice();
  }


  updateInvoice() {
    console.log(this.invoice);
    this.contractorService.updateInvoice(this.invoice).subscribe(
      (response:any) => {
      console.log("Invoice has been updated"+response);
    }, (error:any) => {
        console.log("Unable to update invoice" + error);})
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

}
