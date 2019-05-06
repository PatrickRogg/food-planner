import { Component, OnInit } from '@angular/core';
import { Weekday } from 'src/models/weekday.model';
import { ModalController } from '@ionic/angular';
import { Meal } from 'src/models/meal.model';
import { SelectMealComponent } from './select-meal/select-meal.component';
import { OverlayEventDetail } from '@ionic/core';
import { Store } from '@ngrx/store';
import { GroceryList } from 'src/models/grocery-list.model';
import { AppCloseApiService } from '../shared/service/api/app-close-api.service';
import { WeekdayApiService } from '../shared/service/api/weekday-api.service';
import { MealApiService } from '../shared/service/api/meal-api.service';

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
    private weekdayApiService: WeekdayApiService,
    private mealApiService: MealApiService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getWeekdays();
    this.getMeals();
    console.log("asd")
  }

  getWeekdays() {
    // this.store.select('weekday').subscribe(data => {
    //   this.weekdays = [];
    //   const weekdayAsObject = data.entities;
    //   Object.keys(weekdayAsObject).forEach(key => {
    //     const weekday: Weekday = weekdayAsObject[key];
    //     this.weekdays.push(weekday);
    //   });
    // });
    this.weekdayApiService.getCurrentAndNextThreeWeekdays().subscribe(data => {
      this.weekdays = data;
    });
  }

  getMeals() {
    // this.store.select('meal').subscribe(data => {
    //   this.meals = [];
    //   const mealsAsObject = data.entities;
    //   Object.keys(mealsAsObject).forEach(key => {
    //     const meal: Meal = mealsAsObject[key];
    //     this.meals.push(meal);
    //   });
    // });
    this.mealApiService.getMeals().subscribe(data => this.meals = data);
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
