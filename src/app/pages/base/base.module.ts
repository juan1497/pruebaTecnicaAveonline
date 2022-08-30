import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormContentComponent } from './components/form-content/form-content.component';
import { TableContentComponent } from './components/table-content/table-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChoicesService } from 'src/shared/services/choices.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    FormContentComponent,
    TableContentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormContentComponent,
    TableContentComponent
  ],
  providers: [
    ChoicesService
  ]
})
export class BaseModule { }
