import { environment } from 'src/environments/environment';

// const API_URL = environment.apiUrl;
const API_URL = 'https://meal-planner-rest-api.herokuapp.com/api/';


export const MEAL_API_URL = API_URL + 'meals/';
export const WEEKDAY_API_URL = API_URL + 'weekdays/';
export const INGREDIENT_API_URL = API_URL + 'ingredients/';
export const GROCERY_LIST_API_URL = API_URL + 'grocery-lists/';
export const APP_CLOSE_API_URL = API_URL + 'close/';
