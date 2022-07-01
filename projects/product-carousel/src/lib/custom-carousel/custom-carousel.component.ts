import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Product } from '../models/product.model';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomCarouselComponent implements OnInit {
  activeSlides!: SlidesOutputData;
  
  activeCenterItems: any;

  centerItem: boolean = false;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoWidth: true,
    navText: ['<fa-icon [icon]="faChevronLeft"></fa-icon>', '<fa-icon [icon]="faChevronRight"></fa-icon>'],
    // autoplay: true,
    center: true,
    margin: 20,
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

  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    this.activeCenterItems = this.activeSlides.slides;
    console.log(this.activeCenterItems);
    for(let i = 0; i < this.activeCenterItems.length; i++){
      if(this.activeCenterItems[i].center){
        this.centerItem =true;
        console.log(this.centerItem);
      }
    }
    console.log(this.activeSlides);
  }
}
