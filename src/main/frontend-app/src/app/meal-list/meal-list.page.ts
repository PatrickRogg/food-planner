import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/models/meal.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DeleteMeal } from '../shared/ngrx/actions/meal.actions';
import { MealDetailStateService } from '../meal-detail/meal-detail-state.service';
import { MealApiService } from '../shared/service/api/meal-api.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.page.html',
  styleUrls: ['./meal-list.page.scss'],
})
export class MealListPage implements OnInit {
  meals: Meal[] = [];

  constructor(
    private router: Router,
    private store: Store<any>,
    private mealDetailStateService: MealDetailStateService,
    private mealApiService: MealApiService
  ) {}

  ngOnInit() {
  }

  ionViewDidEnter () {
    this.getAllMeals();
  }

  getAllMeals() {
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

  public onMealItemClick(meal: Meal) {
    this.router.navigateByUrl('tabs/meal-detail/' + meal.id);
    this.mealDetailStateService.setCurrentMealState(meal);
  }

  public onAddButtonClick() {
    this.router.navigate(['meal-create-edit']);
  }

  // public deleteMeal(meal: Meal) {
  //   this.store.dispatch(new DeleteMeal(meal.id));
  // }

}
