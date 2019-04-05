import { Component, OnInit } from '@angular/core';
import { Weekday } from 'src/models/weekday.model';
import { ModalController } from '@ionic/angular';
import { Meal } from 'src/models/meal.model';
import { SelectMealComponent } from './select-meal/select-meal.component';
import { OverlayEventDetail } from '@ionic/core';
import { Store } from '@ngrx/store';
import { GroceryList } from 'src/models/grocery-list.model';
import { AppCloseApiService } from '../shared/service/api/app-close-api.service';

@Component({
  selector: 'app-planned-meals-overview',
  templateUrl: './planned-meals-overview.page.html',
  styleUrls: ['./planned-meals-overview.page.scss']
})
export class PlannedMealsOverviewPage implements OnInit {
  public weekdays: Weekday[] = [];
  private meals: Meal[] = [];
  private modal: HTMLIonModalElement;

  constructor(
    public modalController: ModalController,
    private store: Store<any>,
    private appCloseApiService: AppCloseApiService
  ) { }

  ngOnInit() {
    this.getWeekdays();
    this.getMeals();
  }

  buttonclick() {
    this.store.select('groceryList').subscribe(data => {
      const groceryLists: GroceryList[] = [];
      for (const key in data.entities) {
        if (data.entities.hasOwnProperty(key)) {
          const element = data.entities[key];
          groceryLists.push(element);
        }
      }
      this.appCloseApiService.sendAllDataToServer(groceryLists).subscribe();
    });
  }

  getWeekdays() {
    this.store.select('weekday').subscribe(data => {
      this.weekdays = [];
      const weekdayAsObject = data.entities;
      Object.keys(weekdayAsObject).forEach(key => {
        const weekday: Weekday = weekdayAsObject[key];
        this.weekdays.push(weekday);
      });
    });
  }

  getMeals() {
    this.store.select('meal').subscribe(data => {
      this.meals = [];
      const mealsAsObject = data.entities;
      Object.keys(mealsAsObject).forEach(key => {
        const meal: Meal = mealsAsObject[key];
        this.meals.push(meal);
      });
    });
  }

  public async onMealCardClick(weekday: Weekday, mealType: string) {
    await this.openModal(weekday, mealType);
    return await this.modal.present();
  }

  async openModal(weekday: Weekday, mealType: string) {
    this.modal = await this.modalController.create({
      component: SelectMealComponent,
      componentProps: {
        weekday: weekday,
        mealType: mealType,
        meals: this.meals
      }
    });
  }
}
