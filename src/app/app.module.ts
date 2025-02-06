import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSubContractor} from './public/sub-contractor/sub-contractor.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContractorComponent } from './public/contractor/contractor.component';
import { HomepageModule } from './public/homepage/homepage.module';
import { PublicModule } from './public/landingPage/public.module';
import { LoginComponent } from './admin/login/login.component';
import {ContractorModule} from './public/contractor/contractor.module';
import { ContractorInfoComponent } from './public/contractor/contractor-info/contractor-info.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { AllSubContractorsComponent } from './public/contractor/all-sub-contractors/all-sub-contractors.component';
import { InvoicesContractorComponent } from './public/contractor/invoice-contractor/invoices-contractor.component';
import { ContractorGeneralInformationComponent } from './public/contractor/contractor-general-information/contractor-general-information.component';
import { SubContractorInfoComponent } from './public/sub-contractor/sub-contractor-info/sub-contractor-info.component';
import { SubContractorInvoicesComponent } from './public/sub-contractor/sub-contractor-invoices/sub-contractor-invoices.component';
import { SubContractorGeneralInformationComponent } from './public/sub-contractor/sub-contractor-general-information/sub-contractor-general-information.component';
import { InvoiceComponent } from './public/invoice/invoice.component';

const routes: Routes=[
]

@NgModule({
  declarations: [
    AppComponent,
    CreateSubContractor,
    ContractorComponent,
    LoginComponent,
    ContractorInfoComponent,
    AllSubContractorsComponent,
    InvoicesContractorComponent,
    ContractorGeneralInformationComponent,
    SubContractorInfoComponent,
    SubContractorInvoicesComponent,
    SubContractorGeneralInformationComponent,
    InvoiceComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PublicModule,
    ReactiveFormsModule,
    ContractorModule,
    NavbarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  exports: [
    AppComponent,
    ContractorInfoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
