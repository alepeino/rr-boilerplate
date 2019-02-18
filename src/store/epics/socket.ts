import { ActionsObservable } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';
import Io from 'socket.io-client';

const socket = Io('http://localhost:4000');

socket.on('connect', console.log);
socket.on('disconnect', console.log);

export const sendToSocketEpic = (action$: ActionsObservable<any>) => action$.pipe(
  tap(action => socket.emit('action', action)),
  ignoreElements()
);
