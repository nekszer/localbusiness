import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantFormPage } from './restaurant-form.page';

describe('RestaurantFormPage', () => {
  let component: RestaurantFormPage;
  let fixture: ComponentFixture<RestaurantFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
