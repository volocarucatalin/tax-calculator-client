import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterLink, RouterModule } from '@angular/router';
import {AppModule} from '../../app.module';
import {LoginComponent} from '../../admin/login/login.component';
import {AppComponent} from '../../app.component';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports: [
    HomepageComponent,
    AppComponent

  ],
  imports: [
    CommonModule, RouterModule, AppModule,
  ]
})
export class HomepageModule { }
