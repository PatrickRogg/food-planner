import { Action } from '@ngrx/store';
import { Weekday } from 'src/models/weekday.model';

export const CREATE_WEEKDAY = 'CREATE_WEEKDAY';
export const UPDATE_WEEKDAY = 'UPDATE_WEEKDAY';
export const ADD_ALL_WEEKDAYS = 'ADD_ALL_WEEKDAYS';

export class CreateWeekday implements Action {
  readonly type = CREATE_WEEKDAY;
  constructor(public weekday: Weekday) { }
}

export class UpdateWeekday implements Action {
  readonly type = UPDATE_WEEKDAY;
  constructor(
    public id: number,
    public changes: Partial<Weekday>
  ) { }
}

export class AddAllWeekdays implements Action {
  readonly type = ADD_ALL_WEEKDAYS;
  constructor(public weekdays: Weekday[]) { }
}

export type WeekdayActions = UpdateWeekday | AddAllWeekdays | CreateWeekday;
