import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/models/ingredient.model';
import { INGREDIENT_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class IngredientApiService {

  constructor(private http: HttpClient) { }

  public getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(INGREDIENT_API_URL);
  }
}
