import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientCreateEditComponent } from './ingredient-create-edit.component';

describe('IngredientCreateEditComponent', () => {
  let component: IngredientCreateEditComponent;
  let fixture: ComponentFixture<IngredientCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
