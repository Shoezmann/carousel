import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductCarouselModule } from 'product-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCardModule } from 'product-card';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductCardModule,
    ProductCarouselModule,
    CarouselModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
