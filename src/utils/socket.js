import { io } from 'socket.io-client';

const useSocket = () => {
  const socket = io(process.env.REACT_APP_SERVER_LOCAL);

  socket.on('connect', () => {
    console.log('socket.id', socket.id);
  });

  const emitEvent = (channel, data) => {
    socket.emit(channel, data);
  };

  return {
    emitEvent,
  };
};

export default useSocket;
