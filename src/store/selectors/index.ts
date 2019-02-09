import { Selector } from 'reselect';
import { State } from '../clientReducers';

export const value: Selector<State, number> = state => state.counter;
