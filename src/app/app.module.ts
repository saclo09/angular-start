import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

import { SalesdocumentsService } from './salesdocuments.service';
import { SalesdocumentListComponent } from './salesdocument-list/salesdocument-list.component';
import { SalesdocumentAddNewComponent } from './salesdocument-add-new/salesdocument-add-new.component';
import { SalesdocumentDetailComponent } from './salesdocument-detail/salesdocument-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'details/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'salesdocuments', component: SalesdocumentListComponent },
      { path: 'salesdocument-add', component: SalesdocumentAddNewComponent },
      { path: 'salesdocument/:companyCode/:salesDocumentNo', component: SalesdocumentDetailComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    SalesdocumentListComponent,
    SalesdocumentAddNewComponent,
    SalesdocumentDetailComponent
  ],
  bootstrap: [ AppComponent ],
  
providers: [
    SalesdocumentsService,CartService]
})

export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/