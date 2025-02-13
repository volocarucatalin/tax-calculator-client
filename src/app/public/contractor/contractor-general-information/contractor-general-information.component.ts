import {Component, OnInit} from '@angular/core';
import {ContractorService} from '../../../admin/services/contractor.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-contractor-general-information',
  standalone: false,

  templateUrl: './contractor-general-information.component.html',
  styleUrl: './contractor-general-information.component.css'
})
export class ContractorGeneralInformationComponent implements OnInit {

  invoices: any;
  subContractors: any;
  uniqueJobs = new Set<string>();


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
  calculateSubContractorsFromJob(){

  }
  addJobNames() {
    for (let i = 0; i < this.invoices.length; i++) {
      if(!this.uniqueJobs.has(this.invoices[i].jobName)){
        this.uniqueJobs.add(this.invoices[i].jobName);
      }
    }
    return this.uniqueJobs;
  }

  getSubContractorsFromJob (invoices: any){
    let subContractors = new Set<string>();
    for (let i = 0; i < invoices.length; i++) {
      if(this.uniqueJobs.has(invoices[i].jobName)){
        if(!subContractors.has(invoices[i].subContractorId)){
          subContractors.add(invoices[i].subContractorId);
        }
      }
    }
    return subContractors.size;
  }
}
