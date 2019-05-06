import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientDetail } from 'src/models/ingredient-detail.model';
import { HttpClient } from '@angular/common/http';
import { INGREDIENT_DETAIL_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class IngredientDetailApiService {

  constructor(private http: HttpClient) { }

  public getIngredientDetails(): Observable<IngredientDetail[]> {
    return this.http.get<IngredientDetail[]>(INGREDIENT_DETAIL_API_URL);
  }
}
