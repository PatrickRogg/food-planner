import { Injectable } from '@angular/core';
import { Meal } from '../../models/meal.model';
import { Observable } from 'rxjs';
import { MEAL_API_URL } from 'src/app/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealApiService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Meal[]> {
    return this.http.get<Meal[]>(MEAL_API_URL);
  }

  public getBy(id: number): Observable<Meal> {
    return this.http.get<Meal>(MEAL_API_URL + id);
  }

  public create(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(
      MEAL_API_URL,
      JSON.stringify(meal),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  public update(meal: Meal): Observable<Meal> {
    return this.http.put<Meal>(
      MEAL_API_URL + meal.id,
      JSON.stringify(meal),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  public deleteBy(id: number): Observable<Meal> {
    return this.http.delete<Meal>(MEAL_API_URL + id);
  }
}
