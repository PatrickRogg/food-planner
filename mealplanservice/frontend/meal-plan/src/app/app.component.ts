import { Component, OnDestroy } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WeekdayApiService } from './shared/service/api/weekday-api.service';
import { MealApiService } from './shared/service/api/meal-api.service';
import { IngredientApiService } from './shared/service/api/ingredient-api.service';
import { Store } from '@ngrx/store';

import * as ingredientActions from './shared/ngrx/actions/ingredient.actions';
import * as mealActions from './shared/ngrx/actions/meal.actions';
import * as weekdayActions from './shared/ngrx/actions/weekday.actions';
import * as groceryListActions from './shared/ngrx/actions/grocery-list.actions';
import { GroceryListApiService } from './shared/service/api/grocery-list-api.service';
import { Ingredient } from 'src/models/ingredient.model';
import { Meal } from 'src/models/meal.model';
import { Weekday } from 'src/models/weekday.model';
import { GroceryList } from 'src/models/grocery-list.model';
import { AppCloseApiService } from './shared/service/api/app-close-api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private weekdayApiService: WeekdayApiService,
    private mealApiService: MealApiService,
    private ingredientApiService: IngredientApiService,
    private groceryListApiService: GroceryListApiService,
    private appCloseApiService: AppCloseApiService,
    private store: Store<any>,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeStore();
      this.subscribeToAppClose();
    });
  }

  initializeStore() {
    this.ingredientApiService.getIngredients().subscribe(ingredients => {
      ingredients.forEach(ingredient => {
        this.store.dispatch(new ingredientActions.CreateIngredient(ingredient));
      });
    });

    this.mealApiService.getMeals().subscribe(meals => {
      meals.forEach(meal => {
        this.store.dispatch(new mealActions.CreateMeal(meal));
      });
    });

    this.weekdayApiService.getCurrentAndNextThreeWeekdays().subscribe(weekdays => {
      weekdays.forEach(weekday => {
        this.store.dispatch(new weekdayActions.CreateWeekday(weekday));
      });
    });

    this.groceryListApiService.getCurrentPlan().subscribe(groceryLists => {
      groceryLists.forEach(groceryList => {
        this.store.dispatch(new groceryListActions.CreateGroceryList(groceryList));
      });
    });
  }

  subscribeToAppClose() {
    window.addEventListener('beforeunload', () => {
      
    });
  }
}
