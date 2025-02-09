import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import {ContractorInfoComponent} from './public/contractor/contractor-info/contractor-info.component';
import {CreateSubContractor} from './public/sub-contractor/sub-contractor.component';
import {HomepageComponent} from './public/homepage/homepage.component';
import {authGuard} from './auth.guard';
import {ContractorComponent} from './public/contractor/contractor.component';
import {AllSubContractorsComponent} from './public/contractor/all-sub-contractors/all-sub-contractors.component';
import {InvoiceComponent} from './public/invoice/invoice.component';
import {SubContractorInfoComponent} from './public/sub-contractor/sub-contractor-info/sub-contractor-info.component';
import {
  SubContractorInvoicesComponent
} from './public/sub-contractor/sub-contractor-invoices/sub-contractor-invoices.component';

const routes: Routes = [
  {
    path :'login',component: LoginComponent
  },
  {
    path: 'dashboard', component: ContractorInfoComponent,canActivate: [authGuard]
  },
  {
    path:'contractor', component: ContractorComponent
  },
  {
    path:'subContractor', component: CreateSubContractor,canActivate: [authGuard]
  },
  {
    path :'all-subContractors', component: AllSubContractorsComponent ,canActivate : [authGuard]
  },
  {path:'', component : HomepageComponent },
  {
    path:'contractorInfo' ,component : ContractorInfoComponent , canActivate :[authGuard]
  },


  {path : 'create-invoice' , component : InvoiceComponent, canActivate :[authGuard]},
  {path : 'sub-contractor-info' , component : SubContractorInfoComponent, canActivate: [authGuard]},
  {path :'get-invoices', component :SubContractorInvoicesComponent, canActivate :[authGuard]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
