import { environment  } from 'src/environments/environment';

// const API_URL = environment.apiUrl;
const API_URL = 'https://meal-planner-rest-api.herokuapp.com/api/';

export const MEAL_API_URL = API_URL + 'meals/';
export const INGREDIENT_API_URL = API_URL + 'ingredients/';
export const INGREDIENT_DETAIL_API_URL = API_URL + 'ingredient-details/';
