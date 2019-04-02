import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Weekday } from 'src/models/weekday.model';
import { Meal } from 'src/models/meal.model';
import { Store } from '@ngrx/store';
import { UpdateWeekday } from 'src/app/shared/ngrx/actions/weekday.actions';
import * as groceryListActions from '../../shared/ngrx/actions/grocery-list.actions';
import { GroceryList } from 'src/models/grocery-list.model';
import { Ingredient } from 'src/models/ingredient.model';


@Component({
  selector: 'app-select-meal',
  templateUrl: './select-meal.component.html',
  styleUrls: ['./select-meal.component.scss']
})
export class SelectMealComponent {
  weekday: Weekday;
  mealType: string;
  selectedMeal: Meal;
  meals: Meal[] = [];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private store: Store<any>,
  ) {}

  ionViewWillEnter() {
    this.weekday = this.navParams.get('weekday');
    this.mealType = this.navParams.get('mealType');
    this.meals = this.navParams.get('meals');
    this.determinSelectedMealByMealType();
  }

  determinSelectedMealByMealType() {
    if (this.mealType === 'Breakfast') {
      this.selectedMeal = this.weekday.breakfast;
    } else if (this.mealType === 'Lunch') {
      this.selectedMeal = this.weekday.lunch;
    } else {
      this.selectedMeal = this.weekday.dinner;
    }
  }

  public onMealSelect(meal: Meal) {
    if (this.selectedMeal !== meal) {
      this.setSelectedMealInWeekday(meal);
      this.updateGroceryList(meal);
      this.selectedMeal = meal;
      this.saveWeekday();
    }
    this.dismissModal();
  }

  updateGroceryList(newMeal: Meal) {
    let groceryListObjects: any;
    this.store.select('groceryList').subscribe(data => {
      groceryListObjects = data.entities;
    });

    for (const key in groceryListObjects) {
      if (groceryListObjects.hasOwnProperty(key)) {
        const groceryList = groceryListObjects[key];
        if (groceryList.weekday.id === this.weekday.id) {
          this.store.dispatch(new groceryListActions.UpdateGroceryList(groceryList.id, this.getUpdatedGroceryList(groceryList)));
        }
      }
    }
  }

  getUpdatedGroceryList(oldGroceryList: GroceryList): GroceryList {
    const toBuyIngredients = this.getToBuyIngredientsFromWeekday();

    for (let i = 0; i < oldGroceryList.boughtIngredients.length; i++) {
      const boughtIngredient = oldGroceryList.boughtIngredients[i];
      for (let j = 0; j < toBuyIngredients.length; j++) {
        const toBuyIngredient = toBuyIngredients[j];
        if (boughtIngredient.designation === toBuyIngredient.designation) {
          toBuyIngredients.splice(j, 1);
          break;
        }
      }
    }
    console.log(toBuyIngredients);
    return new GroceryList(this.weekday, oldGroceryList.boughtIngredients, toBuyIngredients);
  }

  getToBuyIngredientsFromWeekday(): Ingredient[] {
    let toBuyIngredients = this.weekday.breakfast.ingredients;
    toBuyIngredients = toBuyIngredients.concat(this.weekday.lunch.ingredients);
    toBuyIngredients = toBuyIngredients.concat(this.weekday.dinner.ingredients);
    return toBuyIngredients;
  }

  public async dismissModal() {
    await this.modalController.dismiss();
  }

  saveWeekday() {
    this.store.dispatch(new UpdateWeekday(this.weekday.id, this.weekday));
  }

  setSelectedMealInWeekday(meal: Meal) {
    if (this.mealType === 'Breakfast') {
      this.weekday.breakfast = meal;
    } else if (this.mealType === 'Lunch') {
      this.weekday.lunch = meal;
    } else {
      this.weekday.dinner = meal;
    }
  }
}
