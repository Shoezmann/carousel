import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions,} from 'ngx-owl-carousel-o';
import { Product } from '../models/product.model';
@Component({
  selector: 'lib-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomCarouselComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoWidth: true,
    navText: ['&#10094;', '&#10095;'],
    autoplay: true,
    center: true,
    margin: 25,
    stagePadding: 100,
    animateIn: 'slideOutDown',
    animateOut: 'fadeOut',
    smartSpeed:450,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  @Input() products!: Product[];

  @ViewChild('carousel')  carousel!: CarouselComponent;

  constructor() { }


  ngOnInit(): void {
  }
}
