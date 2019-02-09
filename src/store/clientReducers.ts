import { combineReducers } from 'redux';
import { CounterState, reducer as counter } from './features/counter';

export default combineReducers({
  counter
});

export interface State {
  counter: CounterState;
}
