import { Ingredient } from './ingredient.model';
import { Weekday } from './weekday.model';

export class GroceryList {
  id: number;
  constructor(
    public weekday: Weekday,
    public boughtIngredients: Ingredient[],
    public toBuyIngredients: Ingredient[]
  ) { }
}
