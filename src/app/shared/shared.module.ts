import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './mat/mat.module';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './components/nav/nav-link/nav-link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatModule
  ],
  declarations: [
    NavComponent,
    NavLinkComponent
  ],
  exports: [
    MatModule,
    NavComponent,
    NavLinkComponent
  ]
})
export class SharedModule { }
