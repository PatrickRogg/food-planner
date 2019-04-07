import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from 'src/models/meal.model';
import { MEAL_API_URL } from 'src/app/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealApiService {

  constructor(private http: HttpClient) { }

  public getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(MEAL_API_URL);
  }

  public addMeal(meal: Meal): Observable<Meal> {
    const toAddMeal = JSON.stringify(meal);
    return this.http.post<Meal>(
      MEAL_API_URL, toAddMeal,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
