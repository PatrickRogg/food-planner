import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientPage } from './add-ingredient.page';

describe('AddIngredientPage', () => {
  let component: AddIngredientPage;
  let fixture: ComponentFixture<AddIngredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIngredientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
