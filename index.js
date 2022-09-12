require('dotenv').config();
const express = require('express');
const cors = require('cors');
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

app.use('/api', authRouter);
app.use('/api', movieRouter);

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(process.env.PORT || 5000, () => {
    console.log(
      `Server is listening on port http://localhost:5000${server.graphqlPath}`
    );
  });
}

startApolloServer(typeDefs, resolvers);
