import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/models/meal.model';
import { MealDetailStateService } from './meal-detail-state.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.page.html',
  styleUrls: ['./meal-detail.page.scss'],
})
export class MealDetailPage implements OnInit {
  meal: Meal;

  constructor(
    private mealDetailStateService: MealDetailStateService,
  ) { }

  ngOnInit() {
    this.getMeal();
  }

  private getMeal() {
    this.mealDetailStateService.currentMealState.subscribe(data => this.meal = data);
  }

}
