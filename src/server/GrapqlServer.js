const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../../src/schema');
const resolvers = require('../../src/resolver');

const server = new ApolloServer({ typeDefs, resolvers });
server.start();

module.export = { server };
