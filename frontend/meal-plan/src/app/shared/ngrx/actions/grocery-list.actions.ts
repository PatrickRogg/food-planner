import { Action } from '@ngrx/store';
import { GroceryList } from 'src/models/grocery-list.model';

export const CREATE_GROCERYLIST = 'CREATE_GROCERYLIST';
export const UPDATE_GROCERYLIST = 'UPDATE_GROCERYLIST';
export const GET_GROCERYLISTS = 'GET_GROCERYLISTS';

export class CreateGroceryList implements Action {
  readonly type = CREATE_GROCERYLIST;
  constructor(public groceryList: GroceryList) { }
}

export class UpdateGroceryList implements Action {
  readonly type = UPDATE_GROCERYLIST;
  constructor(
    public id: number,
    public changes: Partial<GroceryList>
  ) { }
}

export class GetGroceryLists implements Action {
  readonly type = GET_GROCERYLISTS;
  constructor() { }
}

export type GroceryListActions = CreateGroceryList | UpdateGroceryList | GetGroceryLists;
