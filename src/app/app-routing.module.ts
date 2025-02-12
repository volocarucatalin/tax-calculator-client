import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import {ContractorPendingInvoicesComponent} from './public/contractor/contractor-pending-invoices/contractor-pending-invoices.component';
import {CreateSubContractor} from './public/sub-contractor/sub-contractor.component';
import {HomepageComponent} from './public/homepage/homepage.component';
import {authGuardContractor, authGuardSubContractor} from './auth.guard';
import {ContractorComponent} from './public/contractor/contractor.component';
import {AllSubContractorsComponent} from './public/contractor/all-sub-contractors/all-sub-contractors.component';
import {InvoiceComponent} from './public/invoice/invoice.component';
import {SubContractorInfoComponent} from './public/sub-contractor/sub-contractor-info/sub-contractor-info.component';
import {
  SubContractorInvoicesComponent
} from './public/sub-contractor/sub-contractor-invoices/sub-contractor-invoices.component';
import {
  AllInvoicesContractorComponent
} from './public/contractor/all-inoices-contractor/all-invoices-contractor.component';
import {
  ContractorGeneralInformationComponent
} from './public/contractor/contractor-general-information/contractor-general-information.component';

const routes: Routes = [
  {path :'login',component: LoginComponent},
  {path:'', component : HomepageComponent },
  {path:'contractor', component: ContractorComponent},
  {path: 'dashboard', component: ContractorPendingInvoicesComponent,canActivate: [authGuardContractor]},
  {path:'subContractor', component: CreateSubContractor,canActivate: [authGuardContractor]},
  {path :'all-subContractors', component: AllSubContractorsComponent ,canActivate : [authGuardContractor]},
  {path:'get-pending-invoices' ,component : ContractorPendingInvoicesComponent , canActivate :[authGuardContractor]},
  {path : 'get-invoices-contractor', component :AllInvoicesContractorComponent, canActivate :[authGuardContractor]},
  {path : 'general-info-contractor', component : ContractorGeneralInformationComponent, canActivate :[authGuardContractor]},

  {path : 'create-invoice' , component : InvoiceComponent, canActivate :[authGuardSubContractor]},
  {path : 'sub-contractor-info' , component : SubContractorInfoComponent, canActivate: [authGuardSubContractor]},
  {path :'get-invoices', component :SubContractorInvoicesComponent, canActivate :[authGuardSubContractor]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
