require('dotenv').config();
const express = require('express');
const cors = require('cors');
const io = require('socket.io')(3000, {
  cors: {
    origin: [
      'http://localhost:3001',
      'http://localhost:8080',
      'https://dazzling-speculoos-b396d3.netlify.app',
      'http://14.225.205.199',
    ],
  },
});
const forceSsl = require('force-ssl-heroku');
const db = require('./src/config/db');
const { ApolloServer } = require('apollo-server-express');
const authRouter = require('./src/routes/authRouter');
const movieRouter = require('./src/routes/moviesRouter');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolver');

const app = express();
app.use(forceSsl);
app.use(express.json());
app.use(cors());

// connect
db.connect();

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.use('/api', authRouter);
  app.use('/api', movieRouter);

  app.listen(process.env.PORT || 5000, () => {
    console.log(
      `Server is listening on port http://localhost:${process.env.PORT}${server.graphqlPath}`
    );
  });
}

startApolloServer(typeDefs, resolvers);
