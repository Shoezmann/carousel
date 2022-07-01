import { Component } from '@angular/core';
import { Product } from 'product-carousel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Product[] =  [
    {
      productId:'1',
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/apple/iphone-13-pro-sierra-blue.png',
      productLink: 'https://www.mtn.co.za/shop/deals/device/xiaomi/redmi-note-11-128gb/1-6XV8PRK',
      productImageAlt: 'iPhone 13 Pro Max',
      productDescription: 'iPhone 13 Pro Max'
    },
    {
      productId:'1',
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/apple/iPhone-12-mini-black.png',
      productLink: '',
      productImageAlt: 'iPhone 12 Pro Max',
      productDescription: 'iPhone 12 Pro Max'
    },
    {
      productId:'1',
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/samsung/s22-ultra-black.png',
      productLink: 'https://www.mtn.co.za/shop/deals/device/xiaomi/redmi-note-11-128gb/1-6XV8PRK',
      productImageAlt: 'Samsung Galaxy s22',
      productDescription: 'Samsung Galaxy s22'
    },
    {
      productId:'1',
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/hp/oppo-reno-5-silver.png',
      productLink: 'https://www.mtn.co.za/shop/deals/device/xiaomi/redmi-note-11-128gb/1-6XV8PRK',
      productImageAlt: 'Oppo Reno 5',
      productDescription: 'Oppo Reno 5'
    },
    {
      productId:'1',
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/lenovo/redmi-note-11-grey.png',
      productLink: 'https://www.mtn.co.za/shop/deals/device/xiaomi/redmi-note-11-128gb/1-6XV8PRK',
      productImageAlt: 'Xiaomi Mi 12',
      productDescription: 'Xiaomi Mi 12'
    },
    {
      productId:'1',
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/apple/iPhone-se-3rd-black_1.png',
      productLink: 'https://www.mtn.co.za/shop/deals/device/xiaomi/redmi-note-11-128gb/1-6XV8PRK',
      productImageAlt: 'iPhone SE',
      productDescription: 'iPhone SE'
    },
    {
      productId:'1',
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/nokia/xiaomi-redmi-9a-grey.png',
      productLink: 'https://www.mtn.co.za/shop/deals/device/xiaomi/redmi-9a-32gb/1-33Q9UL3',
      productImageAlt: 'Xiaomi 9A',
      productDescription: 'Xiaomi 9A'
    },

  ]
}
