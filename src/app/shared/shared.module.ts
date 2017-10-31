import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './mat/mat.module';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './components/nav/nav-link/nav-link.component';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatModule
  ],
  declarations: [
    NavComponent,
    NavLinkComponent,
    DataTableComponent
  ],
  exports: [
    MatModule,
    NavComponent,
    NavLinkComponent,
    DataTableComponent
  ]
})
export class SharedModule { }
