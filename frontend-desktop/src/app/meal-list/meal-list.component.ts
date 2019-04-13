import { Component, OnInit } from '@angular/core';
import { Meal } from '../shared/models/meal.model';
import { MealApiService } from '../shared/services/api/meal-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  meals: Meal[] = [];

  constructor(
    private mealApiService: MealApiService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.getAllMealsFromServer();
  }

  private getAllMealsFromServer() {
    this.mealApiService.getAll().subscribe(data => this.meals = data);
  }

  public editMeal(meal: Meal) {
    this.router.navigate(['meal-edit', meal.id]);
  }

  public deleteMeal(meal: Meal) {
    this.mealApiService.deleteBy(meal.id).subscribe();
  }

}
