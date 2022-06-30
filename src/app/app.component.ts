import { Component } from '@angular/core';
import { product } from 'projects/product-carousel/src/lib/custom-carousel/custom-carousel.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  products: product[] =  [
    {
      productId: 1,
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/apple/iPhone-12-mini-black.png',
      productLink: '',
      productImageAlt: 'Test',
      productDescription: ''
    }

  ]
}
