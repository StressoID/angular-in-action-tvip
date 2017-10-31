import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { GoodsModule } from './goods/goods.module';
import { CategoriesComponent } from './categories.component';
import { TestDirective } from './test.directive';

@NgModule({
  imports: [
    CommonModule,
    GoodsModule,
    CategoriesRoutingModule
  ],
  declarations: [CategoriesComponent, TestDirective]
})
export class CategoriesModule { }
