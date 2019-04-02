import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroceryList } from 'src/models/grocery-list.model';
import { GROCERY_LIST_API_URL } from 'src/app/app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryListApiService {

  constructor(private http: HttpClient) { }

  public getCurrentPlan(): Observable<GroceryList[]> {
    return this.http.get<GroceryList[]>(GROCERY_LIST_API_URL + 'current-plan');
  }
}
