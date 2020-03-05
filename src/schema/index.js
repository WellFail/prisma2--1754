
const { nexusPrismaPlugin } = require('nexus-prisma');
const { makeSchema } = require('nexus');

const Query = require('./Query').default;
const Mutation = require('./Mutation').default;

const Post = require('./Post').default;
const User = require('./User').default;

exports.default = makeSchema({
  types: [Post, User, Query, Mutation],
  outputs: {},
  plugins: [nexusPrismaPlugin()],
});
