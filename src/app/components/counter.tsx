import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { State } from '../../store/client';
import { decrement, increment } from '../../store/features/counter';
import { value } from '../../store/selectors';

const Counter: React.FunctionComponent<StateProps & DispatchProps> = ({ value, increment, decrement }) => (
  <div>
    <button onClick={decrement}>-</button>
    <span>{value}</span>
    <button onClick={increment}>+</button>
  </div>
);

export interface StateProps {
  value: number;
}

export interface DispatchProps {
  increment: () => void;
  decrement: () => void;
}

export default connect<StateProps, DispatchProps, {}, State>(
  createStructuredSelector({ value }),
  { increment, decrement }
)(Counter);
