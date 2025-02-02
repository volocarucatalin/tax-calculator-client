import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ContractorDashBordComponent} from './public/contractor/contractor-dash-bord/contractor-dash-bord.component';
import {SubContractor} from './admin/entityes/sub-contractor';
import {CreateSubContractor} from './admin/sub-contractor/sub-contractor.component';

const routes: Routes = [
  { path : '', loadChildren: ()=>  import('./public/public.module').then((m)=>m.PublicModule)},
  {path :'login', component : LoginComponent},
  {
    path: 'dashboard', component: ContractorDashBordComponent
  },
  {
    path:'subContractor', component: CreateSubContractor
  },
  {path:'admin', loadChildren :() => import('./admin/admin.module').then((m)=>m.AdminModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
