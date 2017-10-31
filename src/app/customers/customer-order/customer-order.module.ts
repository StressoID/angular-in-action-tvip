import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrderRoutingModule } from './customer-order-routing.module';
import { OrderItemComponent } from './order-item/order-item.component';
import { CustomerOrderComponent } from './customer-order.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerOrderRoutingModule
  ],
  declarations: [CustomerOrderComponent, OrderItemComponent]
})
export class CustomerOrderModule { }
