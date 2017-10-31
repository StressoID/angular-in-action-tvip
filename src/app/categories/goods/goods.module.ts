import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsComponent } from './goods.component';
import { GoodsService } from './goods.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GoodsRoutingModule,
  ],
  declarations: [GoodsComponent],
  providers: [ GoodsService ],
  exports: [GoodsComponent],
})
export class GoodsModule {
}
