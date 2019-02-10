import { Selector } from 'reselect';
import { State } from '../client';

export const value: Selector<State, number> = state => state.counter;
