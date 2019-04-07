import { Action } from '@ngrx/store';
import { Ingredient } from 'src/models/ingredient.model';

export const CREATE_INGREDIENT = 'CREATE_INGREDIENT';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const ADD_ALL_INGREDIENTS = 'ADD_ALL_INGREDIENTS';

export class CreateIngredient implements Action {
  readonly type = CREATE_INGREDIENT;
  constructor(public ingredient: Ingredient) {}
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(
    public id: number,
    public changes: Partial<Ingredient>
  ) { }
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
  constructor(public id: number) { }
}

export class AddAllIngredients implements Action {
  readonly type = ADD_ALL_INGREDIENTS;
  constructor(public ingredients: Ingredient[]) { }
}

export type IngredientActions = CreateIngredient | UpdateIngredient | DeleteIngredient | AddAllIngredients;
