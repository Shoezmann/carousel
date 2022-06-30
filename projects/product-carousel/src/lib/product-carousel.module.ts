import { NgModule } from '@angular/core';
import { ProductCarouselComponent } from './product-carousel.component';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';



@NgModule({
  declarations: [
    ProductCarouselComponent,
    CustomCarouselComponent
  ],
  imports: [
  ],
  exports: [
    ProductCarouselComponent
  ]
})
export class ProductCarouselModule { }
