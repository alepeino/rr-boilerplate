import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import clientReducers, { State } from './clientReducers';

export default function configureStore (initialState?: State) {
  const middleware = applyMiddleware();
  const enhancer = process.env.NODE_ENV === 'production' ? middleware : composeWithDevTools(middleware);

  return createStore(clientReducers, initialState, enhancer);
}
