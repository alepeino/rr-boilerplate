import { Reducer } from 'redux';
import { ActionType, createStandardAction, getType } from 'typesafe-actions';

export type CounterState = number;

export const decrement = createStandardAction('[Counter] DECREMENT')();
export const increment = createStandardAction('[Counter] INCREMENT')();

export const reducer: Reducer<CounterState> = (
  state = 0, { type }: ActionType<typeof increment | typeof decrement>
) => {
  switch (type) {
    case getType(increment):
      return state + 1;
    case getType(decrement):
      return state - 1;
    default:
      return state;
  }
};
