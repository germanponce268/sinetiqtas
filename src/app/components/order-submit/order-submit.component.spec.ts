import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSubmitComponent } from './order-submit.component';

describe('OrderSubmitComponent', () => {
  let component: OrderSubmitComponent;
  let fixture: ComponentFixture<OrderSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSubmitComponent]
    });
    fixture = TestBed.createComponent(OrderSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
