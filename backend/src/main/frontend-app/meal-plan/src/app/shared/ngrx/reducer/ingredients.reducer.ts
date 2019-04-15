import * as actions from '../actions/ingredient.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Ingredient } from 'src/models/ingredient.model';

export const ingredientAdapter = createEntityAdapter<Ingredient>();
export interface State extends EntityState<Ingredient> { }
const intialState = ingredientAdapter.getInitialState();

export function ingredientReducer(state: State = intialState, action: actions.IngredientActions) {
  switch (action.type) {
    case actions.CREATE_INGREDIENT:
      return ingredientAdapter.addOne(action.ingredient, state);

    case actions.UPDATE_INGREDIENT:
      return ingredientAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case actions.DELETE_INGREDIENT:
      return ingredientAdapter.removeOne(action.id, state);

    case actions.ADD_ALL_INGREDIENTS:
      return ingredientAdapter.addAll(action.ingredients, state);

    default:
      return state;
  }
}
