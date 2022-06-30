import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    CardComponent
  ],
  imports: [
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }
