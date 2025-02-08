import { Component } from '@angular/core';
import {Invoice} from '../../admin/entityes/invoice';
import {SubContractorService} from '../../admin/services/sub-contractor.service';

@Component({
  selector: 'app-invoice',
  standalone: false,

  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
   invoice : Invoice = new Invoice();

  constructor(private subContractorService: SubContractorService) {

  }

  createInvoice(){
    this.subContractorService.createInvoice(this.invoice).subscribe(data => {
      console.log(data);
      alert("Invoice Created Successfully");
    });
  }
}
