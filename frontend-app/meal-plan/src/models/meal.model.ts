import { Ingredient } from './ingredient.model';

export class Meal {
  id: number;
  recipeUrl: string;
  constructor(
    public designation: string,
    public ingredients: Ingredient[]
  ) { }
}
