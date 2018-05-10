import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestEditComponent } from './purchaserequest-edit.component';

describe('PurchaserequestEditComponent', () => {
  let component: PurchaseRequestEditComponent;
  let fixture: ComponentFixture<PurchaseRequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
