import * as actions from '../actions/meal.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Meal } from 'src/models/meal.model';

export const mealAdapter = createEntityAdapter<Meal>();
export interface State extends EntityState<Meal> { }
const intialState = mealAdapter.getInitialState();

export function mealReducer(state: State = intialState, action: actions.MealActions) {
  switch (action.type) {
    case actions.CREATE_MEAL:
      return mealAdapter.addOne(action.meal, state);

    case actions.UPDATE_MEAL:
      return mealAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case actions.DELETE_MEAL:
      return mealAdapter.removeOne(action.id, state);

    case actions.ADD_ALL_MEALS:
      return mealAdapter.addAll(action.meals, state);

    default:
      return state;
  }
}
