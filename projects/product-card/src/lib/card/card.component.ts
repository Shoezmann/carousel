import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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
