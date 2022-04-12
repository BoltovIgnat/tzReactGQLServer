const graphql = require('graphql')

const { GraphQLSchema } = graphql

const Query = require('../schema/query')
const Mutation = require('../schema/mutation')

module.exports = new GraphQLSchema ({
    query: Query,
    mutation: Mutation
})