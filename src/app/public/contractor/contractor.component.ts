import { Component, OnInit } from '@angular/core';
import { Contractor } from '../../admin/entityes/contractor';
import { ContractorService } from '../../admin/services/contractor.service';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../../admin/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contractor',
  standalone: false,

  templateUrl:'./contractor.component.html',
  styleUrl: './contractor.component.css'
})
export class ContractorComponent implements OnInit {

  contractor : Contractor = new Contractor();

  constructor (private contractorService : ContractorService, private http: HttpClient,private authService: AuthService ,private router : Router){}

  ngOnInit(): void {}



  addContractorData(){

    this.contractorService.addContractor(this.contractor)
    return this.router.navigateByUrl('/login')
  }

  logout(){
    this.authService.logout();
  }
}
