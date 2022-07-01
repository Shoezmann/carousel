import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoezProductCardComponent } from './shoez-product-card.component';



@NgModule({
  declarations: [
    ShoezProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoezProductCardComponent
  ]
})
export class ShoezProductCardModule { }
