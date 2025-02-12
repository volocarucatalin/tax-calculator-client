import {Component, OnInit} from '@angular/core';
import {SubContractorService} from '../../../admin/services/sub-contractor.service';

@Component({
  selector: 'app-sub-contractor-invoices',
  standalone: false,

  templateUrl: './sub-contractor-invoices.component.html',
  styleUrl: './sub-contractor-invoices.component.css'
})
export class SubContractorInvoicesComponent implements OnInit {

  invoices: any;
  totalPayment :any ;

  constructor(private subContractorService: SubContractorService) { }

  ngOnInit(): void {
    let response = this.subContractorService.getAllSubContractorsInvoices();
    response.subscribe(data => {
      this.invoices = data;
    })
  }

  checkStatus(invoice:any){
    return invoice.status == 'PENDING';
  }

}
