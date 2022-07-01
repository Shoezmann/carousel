import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './product-card.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    CardComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent, CardComponent
  ]
})
export class ProductCardModule { }
