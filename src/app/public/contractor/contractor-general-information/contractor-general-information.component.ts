import {Component, OnInit} from '@angular/core';
import {ContractorService} from '../../../admin/services/contractor.service';

@Component({
  selector: 'app-contractor-general-information',
  standalone: false,

  templateUrl: './contractor-general-information.component.html',
  styleUrl: './contractor-general-information.component.css'
})
export class ContractorGeneralInformationComponent implements OnInit {

  invoices: any;
  subContractors: any;


  constructor(private contractorService: ContractorService) {
    this.invoices = contractorService.getAllInvoices().subscribe(
      data => {
        this.invoices = data;
      }
    )

    this.subContractors = contractorService.getAllSubContractors().subscribe(
      data => {
        this.subContractors = data;
      }
    )

  }

  ngOnInit(): void {

  }

  invoiceTotal(){
    let paidInvoices = 0
    for (let i = 0; i < this.invoices.length; i++) {
      if(this.invoices[i].status == 'PAID'){
        paidInvoices++;
      }
    }
    return paidInvoices;
  }

  subContractorTotal(){
    return this.subContractors.length;
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

  calculateTotalPaidInvoices(){
    let total = 0;
    for (let i = 0; i < this.invoices.length; i++) {
      if(this.invoices[i].status == 'PAID'){
        const totalInvoice = this.calculateReceivingMoney(this.invoices[i])
        total += totalInvoice;
      }
    }
    return total;
  }

  calculateTotalSubContractorsTax(){
    let total = 0;
    for (let i = 0; i < this.invoices.length; i++) {
      if(this.invoices[i].status == 'PAID') {
        const totalInvoice = this.calculateTax(this.invoices[i])
        total += totalInvoice;
      }
    }
    return total;



  }



  calculateTotalPaidInvoicesInDateRange(startDate: string, endDate: string): number {
    // Parse the start and end dates
    const start = new Date(startDate);
    const end = new Date(endDate);

    let total = 0;

    for (let i = 0; i < this.invoices.length; i++) {
      const invoice = this.invoices[i];
      const invoiceDate = new Date(invoice.date); // Ensure the date format matches the expected structure

      // Check if the invoice is paid and falls within the given date range
      if (invoice.status === 'PAID' && invoiceDate >= start && invoiceDate <= end) {
        total += this.calculateReceivingMoney(invoice); // Calculate total receiving money for the invoice
      }
    }

    return total;
  }



}
