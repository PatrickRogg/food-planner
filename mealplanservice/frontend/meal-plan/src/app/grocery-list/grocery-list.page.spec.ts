import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListPage } from './grocery-list.page';

describe('GroceryListPage', () => {
  let component: GroceryListPage;
  let fixture: ComponentFixture<GroceryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
