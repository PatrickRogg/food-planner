import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientDetail } from 'src/app/shared/models/ingredient-detail.model';
import { INGREDIENT_DETAIL_API_URL } from '../../../app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientDetailApiService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IngredientDetail[]> {
    return this.http.get<IngredientDetail[]>(INGREDIENT_DETAIL_API_URL);
  }

  public getBy(id: number): Observable<IngredientDetail> {
    return this.http.get<IngredientDetail>(INGREDIENT_DETAIL_API_URL + id);
  }

  public create(ingredientDetail: IngredientDetail): Observable<IngredientDetail> {
    return this.http.post<IngredientDetail>(
      INGREDIENT_DETAIL_API_URL,
      JSON.stringify(ingredientDetail),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  public update(ingredientDetail: IngredientDetail): Observable<IngredientDetail> {
    return this.http.put<IngredientDetail>(
      INGREDIENT_DETAIL_API_URL + ingredientDetail.id,
      JSON.stringify(ingredientDetail),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  public deleteBy(id: number): Observable<IngredientDetail> {
    return this.http.delete<IngredientDetail>(INGREDIENT_DETAIL_API_URL + id);
  }
}
