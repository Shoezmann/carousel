import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ShoezProductCardComponent } from './shoez-product-card.component';

@NgModule({
  declarations: [
    ShoezProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ShoezProductCardComponent
  ]
})
export class ShoezProductCardModule { }
