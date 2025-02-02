import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomepageComponent } from '../homepage/homepage.component';
import {LoginComponent} from '../../admin/login/login.component';

const routes: Routes = [{path :'', component: PublicComponent, children :[
  {path:'', component :HomepageComponent}]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
