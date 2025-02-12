import {Component, OnInit} from '@angular/core';
import {ContractorService} from '../../../admin/services/contractor.service';

@Component({
  selector: 'app-all-invoices-contractor',
  standalone: false,

  templateUrl: './all-invoices-contractor.component.html',
  styleUrl: './all-invoices-contractor.component.css'
})
export class AllInvoicesContractorComponent implements OnInit {
  invoices: any;
  constructor(private contractorService: ContractorService) { }

  ngOnInit(): void {
    let response = this.contractorService.getAllInvoices().subscribe(data => {
      this.invoices = data;
    })
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
