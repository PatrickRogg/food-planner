import { Component, OnInit } from '@angular/core';
import { Meal } from '../shared/models/meal.model';
import { Router } from '@angular/router';
import { MealApiService } from '../shared/services/api/meal-api.service';
import { Ingredient } from '../shared/models/ingredient.model';
import { IngredientDetail } from '../shared/models/ingredient-detail.model';
import { IngredientDetailApiService } from '../shared/services/api/ingredient-detail-api.service';

@Component({
  selector: 'app-meal-create-edit',
  templateUrl: './meal-create-edit.component.html',
  styleUrls: ['./meal-create-edit.component.scss']
})
export class MealCreateEditComponent implements OnInit {
  title = 'Create ';
  meal: Meal;
  toAddIngredient: Ingredient;
  ingredientDetails: IngredientDetail[] = [];

  constructor(
    private mealApiService: MealApiService,
    private ingredientDetailsApiService: IngredientDetailApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.meal = new Meal('', '', []);
    this.toAddIngredient = new Ingredient(null, 0, 'g');
    this.getAllIngredientDetailsFromServer();
  }

  private getAllIngredientDetailsFromServer() {
    this.ingredientDetailsApiService.getAll().subscribe(data => this.ingredientDetails = data);
  }

  public submitForm() {
    if (this.meal.designation !== '') {
      this.mealApiService
        .create(this.meal).subscribe(data => {
          this.router.navigate(['']);
        });
    }
  }

  public addIngredient() {
    this.meal.ingredients.push(this.toAddIngredient);
    this.toAddIngredient = new Ingredient(null, 0, 'g');
  }

}
