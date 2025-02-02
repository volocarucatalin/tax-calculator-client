import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ContractorDashBordComponent} from './contractor-dash-bord.component';

const routes: Routes = [
  { path: 'contractor-dash-bord', component: ContractorDashBordComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContractorDashBordModule { }
