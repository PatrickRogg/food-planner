import { Action } from '@ngrx/store';
import { Meal } from 'src/models/meal.model';

export const CREATE_MEAL = 'CREATE_MEAL';
export const UPDATE_MEAL = 'UPDATE_MEAL';
export const DELETE_MEAL = 'DELETE_MEAL';
export const ADD_ALL_MEALS = 'ADD_ALL_MEALS';

export class CreateMeal implements Action {
  readonly type = CREATE_MEAL;
  constructor(public meal: Meal) { }
}

export class UpdateMeal implements Action {
  readonly type = UPDATE_MEAL;
  constructor(
    public id: number,
    public changes: Partial<Meal>
  ) { }
}

export class DeleteMeal implements Action {
  readonly type = DELETE_MEAL;
  constructor(public id: number) { }
}

export class AddAllMeals implements Action {
  readonly type = ADD_ALL_MEALS;
  constructor(public meals: Meal[]) { }
}

export type MealActions = CreateMeal | UpdateMeal | DeleteMeal | AddAllMeals;
