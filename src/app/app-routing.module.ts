import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { SchematicDashboardComponent } from './components/schematic-dashboard/schematic-dashboard.component';
import { ZonesHomeComponent } from './components/zones-home/zones-home.component';
import { OGrandParentComponent } from './modules/orders/o-grand-parent/o-grand-parent.component';

const routes: Routes = [
  { path: 'dashboard', component: SchematicDashboardComponent },
  { path: 'decorators', component: ItemComponent },
  { path: 'communication', component: OGrandParentComponent },
  { path: 'zones', component: ZonesHomeComponent },
  { path: 'ngrx', loadChildren: () => import('./ngrx-books/ngrx-books.module').then(m => m.NgrxBooksModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
