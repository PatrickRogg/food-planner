import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedMealsOverviewPage } from './planned-meals-overview.page';
import { By } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';
import { Weekday } from 'src/models/weekday.model';
import { Meal } from 'src/models/meal.model';
import { ModalController } from '@ionic/angular';

describe('PlannedMealsOverviewPage', () => {
  let component: PlannedMealsOverviewPage;
  let fixture: ComponentFixture<PlannedMealsOverviewPage>;
  let debugElement: DebugElement;
  let storageMock: Storage;
  let modalControllerMock: ModalController;

  beforeEach(async(() => {
    storageMock = new Storage(null);
    modalControllerMock = new ModalController(null, null, null, null);
    TestBed.configureTestingModule({
      declarations: [ PlannedMealsOverviewPage ],
      providers: [
        { provide: Storage, useValue: storageMock },
        { provide: ModalController, useValue: modalControllerMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedMealsOverviewPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  beforeEach(() => {
    storageMock.clear();
    component.weekdays = [new Weekday(new Date(), new Meal('Corn'), new Meal('Pizza'), new Meal('Chilli'))]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('template should have 7 ion-cards', () => {
    const ionCardElement = debugElement.queryAll(By.css('#card-title'));
    expect(ionCardElement.length).toBe(component.weekdays.length);
  });

  it('template should have Breakfast, Lunch and Dinner text', () => {
    const breakfastElementText = debugElement.query(By.css('#breakfast')).nativeElement.textContent;
    const lunchElementText = debugElement.query(By.css('#lunch')).nativeElement.textContent;
    const dinnerElementText = debugElement.query(By.css('#dinner')).nativeElement.textContent;
    expect(breakfastElementText).toEqual('Breakfast');
    expect(lunchElementText).toEqual('Lunch');
    expect(dinnerElementText).toEqual('Dinner');
  });

  it('template should have Breakfast, Lunch and Dinner meal text', () => {
    const breakfastElementText = debugElement.query(By.css('#breakfast-meal')).nativeElement.textContent;
    const lunchElementText = debugElement.query(By.css('#lunch-meal')).nativeElement.textContent;
    const dinnerElementText = debugElement.query(By.css('#dinner-meal')).nativeElement.textContent;
    expect(breakfastElementText).toEqual(component.weekdays[0].breakfast.designation);
    expect(lunchElementText).toEqual(component.weekdays[0].lunch.designation);
    expect(dinnerElementText).toEqual(component.weekdays[0].dinner.designation);
  });

  it('should have called getWeekdaysFromStorage on COmponent init', () => {
    spyOn(component, 'getWeekdays');
    component.ngOnInit();
    expect(component.getWeekdays).toHaveBeenCalled();
  });

  it('should open mealselect on mealcardclick', () => {
    spyOn(component, 'onMealCardClick');
    const mealCardElement = debugElement.query(By.css('.inner-card')).nativeElement;
    mealCardElement.click();
    expect(component.onMealCardClick).toHaveBeenCalled();
  });

  it('should open Modal and dismiss Modal', () => {
    spyOn(modalControllerMock, 'create');
    spyOn(modalControllerMock, 'dismiss');
    component.openModal(null, null);
    modalControllerMock.dismiss();
    expect(modalControllerMock.create).toHaveBeenCalled();
    expect(modalControllerMock.dismiss).toHaveBeenCalled();
  });
});
