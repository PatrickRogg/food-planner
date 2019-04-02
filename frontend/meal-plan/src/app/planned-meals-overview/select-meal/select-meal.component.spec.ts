import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectMealComponent } from './select-meal.component';
import { By } from '@angular/platform-browser';
import { ModalController, NavParams } from '@ionic/angular';
import { Weekday } from 'src/models/weekday.model';
import { Meal } from 'src/models/meal.model';

describe('SelectMealPage', () => {
  let component: SelectMealComponent;
  let fixture: ComponentFixture<SelectMealComponent>;
  let debugElement: DebugElement;
  let modalControllerMock: ModalController;
  let navParamsMock: NavParams;

  beforeEach(async(() => {
    modalControllerMock = new ModalController(null, null, null, null);
    navParamsMock = new NavParams({
      weekday: new Weekday(new Date()),
      meal: new Meal('Chicken', [])
    });
    TestBed.configureTestingModule({
      declarations: [ SelectMealComponent ],
      providers: [
        { provide: ModalController, useValue: modalControllerMock },
        { provide: NavParams, useValue: navParamsMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMealComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('template should contain title and close button', () => {
    spyOn(component, 'dismissModal');
    const closeButtonElement = debugElement.query(By.css('#close-button')).nativeElement;
    closeButtonElement.click();
    expect(component.dismissModal).toHaveBeenCalled();
  });
});
