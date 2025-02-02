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
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './admin/login/login.component';
import {ContractorModule} from './public/contractor/contractor.module';
import { ContractorDashBordComponent } from './public/contractor/contractor-dash-bord/contractor-dash-bord.component';
import { NavbarComponent } from './public/navbar/navbar.component';

const routes: Routes=[
  { path: 'subContractor', component: CreateSubContractor },
  {path: 'contractor' , component : ContractorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateSubContractor,
    ContractorComponent,
    LoginComponent,
    ContractorDashBordComponent
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
    ContractorDashBordComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
