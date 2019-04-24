import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MealListPage } from './meal-list.page';
import { By } from '@angular/platform-browser';
import { Meal } from 'src/models/meal.model';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { MealStorageService } from '../shared/service/meal-storage.service';

describe('MealListPage', () => {
  let component: MealListPage;
  let fixture: ComponentFixture<MealListPage>;
  let debugELement: DebugElement;
  let router: Router;
  let storageMock: Storage;
  let mealStorageServiceMock: MealStorageService;

  beforeEach(async(() => {
    storageMock = new Storage(null);
    mealStorageServiceMock = new MealStorageService(storageMock);
    TestBed.configureTestingModule({
      declarations: [ MealListPage ],
      imports: [
        RouterTestingModule,
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
    fixture = TestBed.createComponent(MealListPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    debugELement = fixture.debugElement;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.meals = [new Meal('Chicken'), new Meal('Pizza'), new Meal('Pig')];
    storageMock.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('template should contain ion-items for each meal', () => {
    const ionItemElements = debugELement.queryAll(By.css('ion-item'));
    expect(ionItemElements.length).toBe(component.meals.length);
  });

  it('template should contain ion-items-options for each meal', () => {
    const ionItemElements = debugELement.queryAll(By.css('ion-item-option'));
    expect(ionItemElements.length).toBe(component.meals.length);
  });

  it('should get all Meals from Storage', async () => {
    await mealStorageServiceMock.addMeal(new Meal(''));
    await mealStorageServiceMock.addMeal(new Meal(''));
    component.getMealsFromStorage();
    expect(component.meals.length).toBe(2);
  });

  it('should navigate to meal details after meal item click', () => {
    const ionItemElement = debugELement.query(By.css('ion-item')).nativeElement;
    let routerLink: string;
    spyOn(router, 'navigate').and.callFake((link: string) => {
      routerLink = link;
    });
    expect(router.navigate).not.toHaveBeenCalled();
    ionItemElement.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(routerLink).toContain('meal-detail');
  });

  it('should navigate to meal create-edit after plus button click', () => {
    const addButtonElement = debugELement.query(By.css('#plus-button')).nativeElement;
    let routerLink: string;
    spyOn(router, 'navigate').and.callFake((link: string) => {
      routerLink = link;
    });
    expect(router.navigate).not.toHaveBeenCalled();
    addButtonElement.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(routerLink).toContain('meal-create-edit');
  });
});
