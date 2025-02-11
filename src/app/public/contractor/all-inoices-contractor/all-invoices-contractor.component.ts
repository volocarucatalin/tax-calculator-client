import {Component, OnInit} from '@angular/core';
import {ContractorService} from '../../../admin/services/contractor.service';

@Component({
  selector: 'app-all-invoices-contractor',
  standalone: false,

  templateUrl: './all-invoices-contractor.component.html',
  styleUrl: './all-invoices-contractor.component.css'
})
export class AllInvoicesContractorComponent implements OnInit {
  invoice: any;
  constructor(private contractorService: ContractorService) { }
  ngOnInit(): void {
    let response = this.contractorService.getAllInvoices().subscribe(data => {
      this.invoice = data;
    })
  }

}
