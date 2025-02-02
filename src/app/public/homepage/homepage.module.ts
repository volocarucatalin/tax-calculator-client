import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {  RouterModule } from '@angular/router';
import {AppModule} from '../../app.module';

import {AppComponent} from '../../app.component';
import {NavbarComponent} from '../navbar/navbar.component';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports: [
    HomepageComponent,
    AppComponent

  ],
  imports: [
    CommonModule, RouterModule, AppModule, NavbarComponent,
  ]
})
export class HomepageModule { }
