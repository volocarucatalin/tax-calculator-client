import {Component, Inject, OnInit} from '@angular/core';
import {ContractorService} from '../../../admin/services/contractor.service';
import {SubContractor} from '../../../admin/entityes/sub-contractor';

@Component({
  selector: 'app-all-sub-contractors',
  standalone: false,

  templateUrl: './all-sub-contractors.component.html',
  styleUrl: './all-sub-contractors.component.css'
})


export class AllSubContractorsComponent implements OnInit{
  subContractors: any;
  selectedSubcontractor: any;


  constructor(private contractorService: ContractorService
  ) {
    console.log("hello");
  }
  ngOnInit(): void {
    let response = this.contractorService.getAllSubContractors();
    response.subscribe((data :any) => this.subContractors = data)

  }
  //1.TODO: we need the current subcontractor
  //2.TODO: we need the new data passed to form in order to make the update
  //3.TODO: put request to server


  onEdit(data: SubContractor) {
    this.selectedSubcontractor = data;
  }


  updateSubContractor() {
    console.log(this.selectedSubcontractor);
    this.contractorService.updateSubContractor(this.selectedSubcontractor.utr)
  }

  deleteSubContractor(subContractorId : number){
    this.contractorService.deleteSubContractor(subContractorId)
  }
}
