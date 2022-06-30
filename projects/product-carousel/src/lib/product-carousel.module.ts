import { NgModule } from '@angular/core';
import { ProductCarouselComponent } from './product-carousel.component';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    ProductCarouselComponent,
    CustomCarouselComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  exports: [
    ProductCarouselComponent, CustomCarouselComponent
  ]
})
export class ProductCarouselModule { }
