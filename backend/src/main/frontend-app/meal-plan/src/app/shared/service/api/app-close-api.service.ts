import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CLOSE_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AppCloseApiService {

  constructor(private http: HttpClient) { }

  public sendAllDataToServer(groceryLists: any): Observable<any> {
    return this.http.put<any>(APP_CLOSE_API_URL, JSON.stringify(groceryLists), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
