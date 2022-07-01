import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoezProductCardComponent } from './shoez-product-card.component';

describe('ShoezProductCardComponent', () => {
  let component: ShoezProductCardComponent;
  let fixture: ComponentFixture<ShoezProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoezProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoezProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
