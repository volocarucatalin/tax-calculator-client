import {Component, OnInit} from '@angular/core';
import {ContractorService} from '../../../admin/services/contractor.service';


@Component({
  selector: 'app-contractor-dash-bord',
  standalone: false,

  templateUrl: './contractor-pending-invoices.component.html',
  styleUrl: './contractor-pending-invoices.component.css'
})
export class ContractorPendingInvoicesComponent implements OnInit {

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
    invoice.status = "CANCELLED";
    this.invoice = invoice;
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
    return Number(invoice.days) * Number(invoice.amount);
  }

  calculateTax(invoice: any) {
    const totalPayment = this.calculateTotalPayment(invoice);
    return (totalPayment*20)/100;
  }

  calculateReceivingMoney(invoice: any){
    const totalPayment = this.calculateTotalPayment(invoice);
    const tax = this.calculateTax(invoice);
    return totalPayment - tax;
  }
}
