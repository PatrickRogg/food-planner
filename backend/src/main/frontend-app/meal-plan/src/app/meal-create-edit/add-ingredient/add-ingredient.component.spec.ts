import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientComponent } from './add-ingredient.component';

describe('AddIngredientPage', () => {
  let component: AddIngredientComponent;
  let fixture: ComponentFixture<AddIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIngredientComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
