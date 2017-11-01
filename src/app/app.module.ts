import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDirectiveDirective } from './my-directive.directive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { DynamicFormService } from './shared/services/dynamic-form.service';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [ HttpService, DynamicFormService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
