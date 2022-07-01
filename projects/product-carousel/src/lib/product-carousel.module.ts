import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ProductCarouselComponent } from './product-carousel.component';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCardModule } from 'product-card';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

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
    ProductCardModule,
    FontAwesomeModule,
    NoopAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProductCarouselComponent, CustomCarouselComponent
  ]
})
export class ProductCarouselModule { }
