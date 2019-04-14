import { Ingredient } from './ingredient.model';

export class Meal {
    id: number;
    constructor(
        public designation: string,
        public recipeUrl: string,
        public ingredients: Ingredient[]
    ) { }
}