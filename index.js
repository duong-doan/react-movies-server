require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { server: ServerApollo } = require('./src/server/GrapqlServer');

const forceSsl = require('force-ssl-heroku');
const db = require('./src/config/db');
const authRouter = require('./src/routes/authRouter');
const movieRouter = require('./src/routes/moviesRouter');
const { CHANNEL } = require('./src/utils/constants');
const {
  createRoomChat,
  newMessage,
} = require('./src/controllers/chatController');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [
      'http://localhost:4001',
      'http://localhost:4000',
      'http://localhost:8080',
      'https://dazzling-speculoos-b396d3.netlify.app',
      'http://14.225.205.199',
    ],
  },
});

app.use(forceSsl);
app.use(express.json());
app.use(cors());

ServerApollo?.applyMiddleware({ app, path: '/graphql' });

// connect db
db.connect();

app.use('/api', authRouter);
app.use('/api', movieRouter);

httpServer.listen(3000, () => {
  console.log(`Server is listening `);
});

io.on('connection', (socket) => {
  console.log('socket.id', socket.id);

  socket.on(CHANNEL.CREATE_ROOM, (data) => {
    createRoomChat(data);
  });
  // socket.on(CHANNEL.MESSAGE, (data) => {
  //   newMessage(data);
  // });
});
