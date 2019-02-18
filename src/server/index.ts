import Io from 'socket.io';
import { Action } from 'redux';

const io = Io();

io.on('connection', socket => {
  console.log('New connection');
  socket.on('action', (action: Action) => {
    console.log(action);
  });
});

io.listen(4000);
