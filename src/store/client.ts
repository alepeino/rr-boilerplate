import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { sendToSocketEpic }from './epics/socket';
import { CounterState, reducer as counter } from './features/counter';

const reducers = combineReducers({
  counter
});

const epics = combineEpics<any, any, State>(
  sendToSocketEpic
);

export interface State {
  counter: CounterState;
}

export default function configureStore (initialState?: State) {
  const epicMiddleware = createEpicMiddleware<any, any, State>();
  const middleware = applyMiddleware(epicMiddleware);
  const enhancer = process.env.NODE_ENV === 'production' ? middleware : composeWithDevTools(middleware);
  const store = createStore(reducers, initialState, enhancer);
  epicMiddleware.run(epics);
  return store;
}
