import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { GoodsModule } from './goods/goods.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule,
    GoodsModule,
    CategoriesRoutingModule
  ],
  declarations: [CategoriesComponent]
})
export class CategoriesModule { }
