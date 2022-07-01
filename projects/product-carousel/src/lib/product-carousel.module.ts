import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ProductCarouselComponent } from './product-carousel.component';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShoezProductCardModule } from 'shoez-product-card';
@NgModule({
  declarations: [
    ProductCarouselComponent,
    CustomCarouselComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    ShoezProductCardModule


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProductCarouselComponent, CustomCarouselComponent
  ]
})
export class ProductCarouselModule { }
