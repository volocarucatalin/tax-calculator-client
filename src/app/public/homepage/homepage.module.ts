import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterLink, RouterModule } from '@angular/router';
import {AppModule} from '../../app.module';
import {LoginComponent} from '../../admin/login/login.component';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports: [
    HomepageComponent,

  ],
  imports: [
    CommonModule, RouterModule, AppModule,
  ]
})
export class HomepageModule { }
