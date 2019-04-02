import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCreateEditPage } from './meal-create-edit.page';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule   } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MealStorageService } from '../shared/service/meal-storage.service';
import { Meal } from 'src/models/meal.model';


describe('MealCreateEditPage', () => {
  let component: MealCreateEditPage;
  let fixture: ComponentFixture<MealCreateEditPage>;
  let debugElement: DebugElement;
  let router: Router;
  let storageMock: Storage;
  let mealStorageServiceMock: MealStorageService;

  beforeEach(async(() => {
    storageMock = new Storage(null);
    mealStorageServiceMock = new MealStorageService(storageMock);
    TestBed.configureTestingModule({
      declarations: [ MealCreateEditPage ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        IonicModule,
      ],
      providers: [
        {provide: Storage, useValue: storageMock},
        {provide: MealStorageService, useValue: mealStorageServiceMock}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealCreateEditPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('template should contain name input', () => {
    const nameInputElement = debugElement.query(By.css('#name-input')).nativeElement;
    expect(nameInputElement).not.toBeNull();
  });

  it('template should contain button to submit', () => {
    const submitButtonElement = debugElement.query(By.css('ion-button')).nativeElement;
    expect(submitButtonElement).not.toBeNull();
  });

  it('should submit form and navigate to meal-list', async () => {
    const submitButtonElement = debugElement.query(By.css('ion-button')).nativeElement;
    let routerLink: string;
    spyOn(router, 'navigate').and.callFake((link: string) => {
      routerLink = link;
    });
    spyOn(mealStorageServiceMock, 'addMeal').and.returnValue(Promise.resolve(new Meal('')));
    component.mealForm.get('mealDesignation').setValue('Chicken');
    await submitButtonElement.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(routerLink).toContain('meal-list');
  });

  it('should create meal form oninit', () => {
    expect(component.mealForm).toBeDefined();
  });
});
