import { ActionReducerMap } from '@ngrx/store';
import { ingredientReducer } from './reducer/ingredients.reducer';
import { mealReducer } from './reducer/meal.reducer';
import { weekdayReducer } from './reducer/weekday.reducer';
import { groceryListReducer } from './reducer/grocery-list.reducer';

export const reducers: ActionReducerMap<any> = {
  ingredient: ingredientReducer,
  meal: mealReducer,
  weekday: weekdayReducer,
  groceryList: groceryListReducer
};
