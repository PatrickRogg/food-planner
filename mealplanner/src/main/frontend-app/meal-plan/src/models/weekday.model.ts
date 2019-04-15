import { Meal } from './meal.model';

export class Weekday {
  id: number;
  constructor(public date: Date, public breakfast?: Meal, public lunch?: Meal, public dinner?: Meal) {}
}
