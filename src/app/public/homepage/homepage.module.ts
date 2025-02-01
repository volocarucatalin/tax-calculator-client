import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports: [
    HomepageComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class HomepageModule { }
