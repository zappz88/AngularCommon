import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCounterComponent } from './purchase-counter.component';

describe('PurchaseCounterComponent', () => {
  let component: PurchaseCounterComponent;
  let fixture: ComponentFixture<PurchaseCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
