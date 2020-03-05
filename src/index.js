const { ApolloServer } = require('apollo-server-lambda');

const schema = require('./schema').default;
const prisma = require('./photon').default;

const lambda = new ApolloServer({
  schema,
  context: () => {
    const context = { prisma };

    return context;
  },
  introspection: true,
});

exports.server = (event, context, cb) => {
  return lambda.createHandler({
    cors: {
      origin: '*',
    },
  })(event, context, cb);

};
