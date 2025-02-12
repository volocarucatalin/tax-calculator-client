import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSubContractor} from './public/sub-contractor/sub-contractor.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContractorComponent } from './public/contractor/contractor.component';
import { LoginComponent } from './admin/login/login.component';
import { ContractorPendingInvoicesComponent } from './public/contractor/contractor-pending-invoices/contractor-pending-invoices.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { AllSubContractorsComponent } from './public/contractor/all-sub-contractors/all-sub-contractors.component';
import { ContractorGeneralInformationComponent } from './public/contractor/contractor-general-information/contractor-general-information.component';
import { SubContractorInfoComponent } from './public/sub-contractor/sub-contractor-info/sub-contractor-info.component';
import { SubContractorInvoicesComponent } from './public/sub-contractor/sub-contractor-invoices/sub-contractor-invoices.component';
import { SubContractorGeneralInformationComponent } from './public/sub-contractor/sub-contractor-general-information/sub-contractor-general-information.component';
import { InvoiceComponent } from './public/invoice/invoice.component';
import { AllInvoicesContractorComponent } from './public/contractor/all-inoices-contractor/all-invoices-contractor.component';
const routes: Routes=[
]

@NgModule({
  declarations: [
    AppComponent,
    CreateSubContractor,
    ContractorComponent,
    LoginComponent,
    ContractorPendingInvoicesComponent,
    AllSubContractorsComponent,
    ContractorGeneralInformationComponent,
    SubContractorInfoComponent,
    SubContractorInvoicesComponent,
    SubContractorGeneralInformationComponent,
    InvoiceComponent,
    AllInvoicesContractorComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  exports: [
    AppComponent,
    ContractorPendingInvoicesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
