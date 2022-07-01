import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shoez-product-card',
  templateUrl: './shoez-product-card.component.html',
  styleUrls: ['./shoez-product-card.component.scss']
})
export class ShoezProductCardComponent implements OnInit {

  constructor() { }

  @Input() isAction: boolean = false;
  @Input() desktopCol!: number;
  @Input() tabletCol!: number;
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() image: string = '';
  @Input() alt: string = '';
  @Input() activeItem: boolean = false;

  ngOnInit(): void {
  }

}
