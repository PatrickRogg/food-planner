import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCreateEditComponent } from './meal-create-edit.component';

describe('MealCreateEditComponent', () => {
  let component: MealCreateEditComponent;
  let fixture: ComponentFixture<MealCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
