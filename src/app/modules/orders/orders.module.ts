import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersHomeComponent } from './orders-home/orders-home.component';
import { OGrandParentComponent } from './o-grand-parent/o-grand-parent.component';
import { OParentComponent } from './o-parent/o-parent.component';
import { OChildAComponent } from './o-child-a/o-child-a.component';
import { OChildBComponent } from './o-child-b/o-child-b.component';
import { CardsComponent } from './cards/cards.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    OrdersHomeComponent,
    OGrandParentComponent,
    OParentComponent,
    OChildAComponent,
    OChildBComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CardsComponent,
    OrdersHomeComponent,
    OGrandParentComponent,
    OParentComponent,
    OChildAComponent,
    OChildBComponent
  ]
})
export class OrdersModule { }
