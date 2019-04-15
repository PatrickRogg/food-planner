import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { WEEKDAY_API_URL } from 'src/app/app.constants';
import { Weekday } from 'src/models/weekday.model';

@Injectable({
  providedIn: 'root'
})
export class WeekdayApiService {

  constructor(
    public http: HttpClient,
  ) { }

  public getCurrentAndNextThreeWeekdays(): Observable<Weekday[]> {
    return this.http.get<Weekday[]>(WEEKDAY_API_URL + 'plan');
  }

  public updateWeekday(weekday: Weekday): Observable<Weekday> {
    const toUpdateWeekday = JSON.stringify(weekday);
    return this.http.put<Weekday>(
      WEEKDAY_API_URL + weekday.id,
      toUpdateWeekday,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  // public getSingleTestanweisung<T>(id: number): Observable<T> {
  //   return this.http.get<T>(this.apiUrl + id);
  // }

  // public getAllTestfahrtenFromSingleTestanweisung<T>(id: number, path: string): Observable<T> {
  //   return this.http.get<T>(this.apiUrl + id + path);
  // }

  // public addTestanweisung<T>(object: any): Observable<T> {
  //   const toAdd = JSON.stringify(object);
  //   return this.http.post<T>(this.apiUrl, toAdd,
  //     { headers: { 'Content-Type': 'application/json' } });
  // }

  // public updateTestanweisung<T>(id: number, objectToUpdate: any): Observable<T> {
  //   const toUpdate = JSON.stringify(objectToUpdate);
  //   return this.http
  //     .put<T>(this.apiUrl + id, toUpdate,
  //       { headers: { 'Content-Type': 'application/json' } });
  // }

  // public deleteTestanweisung<T>(id: number): Observable<T> {
  //   return this.http.delete<T>(this.apiUrl + id);
  // }
}
