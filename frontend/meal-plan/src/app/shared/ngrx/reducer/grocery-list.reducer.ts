import * as actions from '../actions/grocery-list.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { GroceryList } from 'src/models/grocery-list.model';

export const groceryListAdapter = createEntityAdapter<GroceryList>();
export interface State extends EntityState<GroceryList> { }
const intialState = groceryListAdapter.getInitialState();

export function groceryListReducer(state: State = intialState, action: actions.GroceryListActions) {
  switch (action.type) {
    case actions.CREATE_GROCERYLIST:
      return groceryListAdapter.addOne(action.groceryList, state);

    case actions.UPDATE_GROCERYLIST:
      return groceryListAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    default:
      return state;
  }
}
