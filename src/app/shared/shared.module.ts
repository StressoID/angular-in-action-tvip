import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './mat/mat.module';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './components/nav/nav-link/nav-link.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DfQuestionComponent } from './components/df-question/df-question.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatModule
  ],
  declarations: [
    NavComponent,
    NavLinkComponent,
    DataTableComponent,
    DynamicFormComponent,
    DfQuestionComponent
  ],
  exports: [
    MatModule,
    NavComponent,
    NavLinkComponent,
    DataTableComponent,
    DynamicFormComponent,
    DfQuestionComponent
  ]
})
export class SharedModule { }
