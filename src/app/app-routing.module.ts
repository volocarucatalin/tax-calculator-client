import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import {ContractorInfoComponent} from './public/contractor/contractor-info/./contractor-info.component';
import {SubContractor} from './admin/entityes/sub-contractor';
import {CreateSubContractor} from './public/sub-contractor/sub-contractor.component';
import {HomepageComponent} from './public/homepage/homepage.component';
import {authGuard} from './auth.guard';
import {ContractorComponent} from './public/contractor/contractor.component';

const routes: Routes = [
  { path : '', loadChildren: ()=>  import('./public/landingPage/public.module').then((m)=>m.PublicModule)},
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
  {path:'home', component :HomepageComponent,canActivate: [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
