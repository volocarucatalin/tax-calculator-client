import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractorComponent} from './contractor.component';
import {ContractorDashBordComponent} from './contractor-dash-bord/contractor-dash-bord.component';



const routes: Routes = [
  {
    path: '', component: ContractorComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class ContactorRoutingModule {

}
