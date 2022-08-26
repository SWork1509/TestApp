import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';


import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ItemComponent } from './components/item/item.component';
import { MonthlyRevenueComponent } from './components/monthly-revenue/monthly-revenue.component';
import { ProductSalesComponent } from './components/product-sales/product-sales.component';
import { ZonesHomeComponent } from './components/zones-home/zones-home.component';

import { SchematicNavComponent } from './components/schematic-nav/schematic-nav.component';
import { SchematicDashboardComponent } from './components/schematic-dashboard/schematic-dashboard.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersModule } from './modules/orders/orders.module';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CardComponent,
    ProductSalesComponent,
    MonthlyRevenueComponent,
    ZonesHomeComponent,
    SchematicNavComponent,
    SchematicDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OrdersModule,
    MaterialModule,
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
