import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';



@NgModule({
  declarations: [
    NgrxHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgrxHomeComponent
  ]
})
export class NgrxModule { }
