import * as actions from '../actions/weekday.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Weekday } from 'src/models/weekday.model';

export const weekdayAdapter = createEntityAdapter<Weekday>();
export interface State extends EntityState<Weekday> { }
const intialState = weekdayAdapter.getInitialState();

export function weekdayReducer(state: State = intialState, action: actions.WeekdayActions) {
  switch (action.type) {
    case actions.CREATE_WEEKDAY:
      return weekdayAdapter.addOne(action.weekday, state);

    case actions.UPDATE_WEEKDAY:
      return weekdayAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case actions.ADD_ALL_WEEKDAYS:
      return weekdayAdapter.addAll(action.weekdays, state);

    default:
      return state;
  }
}
