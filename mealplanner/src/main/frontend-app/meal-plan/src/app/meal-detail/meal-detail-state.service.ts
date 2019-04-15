import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Meal } from 'src/models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealDetailStateService {
  private currentMealSubject = new BehaviorSubject(null);
  public currentMealState = this.currentMealSubject.asObservable();

  constructor() { }

  public setCurrentMealState(meal: Meal) {
    this.currentMealSubject.next(meal);
  }
}
