import { IngredientDetail } from './ingredient-detail.model';

export class Ingredient {
  id: number;

  constructor(
    public ingredientDetail: IngredientDetail,
    public quantity: number,
    public unit: string
  ) {
  }
}
