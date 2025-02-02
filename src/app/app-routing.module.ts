import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import {ContractorDashBordComponent} from './public/contractor/contractor-dash-bord/contractor-dash-bord.component';
import {SubContractor} from './admin/entityes/sub-contractor';
import {CreateSubContractor} from './public/sub-contractor/sub-contractor.component';
import {HomepageComponent} from './public/homepage/homepage.component';
import {authGuard} from './auth.guard';

const routes: Routes = [
  { path : '', loadChildren: ()=>  import('./public/landingPage/public.module').then((m)=>m.PublicModule)},
  {
    path :'login',component: LoginComponent
  },
  {
    path: 'dashboard', component: ContractorDashBordComponent,canActivate: [authGuard]
  },
  {
    path:'subContractor', component: CreateSubContractor,canActivate: [authGuard]
  },
  {path:'admin', loadChildren :() => import('./admin/admin.module').then((m)=>m.AdminModule),canActivate: [authGuard]},
  {path:'home', component :HomepageComponent,canActivate: [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
