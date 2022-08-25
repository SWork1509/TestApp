import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersHomeComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatSelectModule
  ]
})
export class CustomersModule { }
