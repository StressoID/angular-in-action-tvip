import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { TestDirective } from './test.directive';
import { SharedModule } from '../shared/shared.module';
import { CategoriesService } from './categories.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriesRoutingModule
  ],
  declarations: [CategoriesComponent, TestDirective],
  providers: [ CategoriesService ]
})
export class CategoriesModule { }
