import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PWSMaterialModule } from './PWSMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddInvoicesComponent } from './components/add-invoices/add-invoices.component';
import { AddDeliveryComponent } from './components/add-delivery/add-delivery.component';
import { CreateRoutesheetComponent } from './components/create-routesheet/create-routesheet.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { CompleteRoutesheetComponent } from './components/complete-routesheet/complete-routesheet.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PWSMaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule
  ],
  declarations: [
    AppComponent, 
    HelloComponent,
    AddInvoicesComponent,
    AddDeliveryComponent,
    CreateRoutesheetComponent,InvoiceListComponent,
    CompleteRoutesheetComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
