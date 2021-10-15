import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInvoicesComponent } from './components/add-invoices/add-invoices.component';
import { CreateRoutesheetComponent } from './components/create-routesheet/create-routesheet.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-invoice' },
  { path: 'add-book', component: AddInvoicesComponent },
  { path: 'edit-route/:id', component: CreateRoutesheetComponent},
  { path: 'routesheet', component: InvoiceListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }