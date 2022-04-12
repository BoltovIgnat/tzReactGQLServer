const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLSchema } = graphql

const Authors = require('../../models/author')
const AuthorType = require('./author-type')

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        author: {
            type: AuthorType,
            resolve({ authorId }, args) {
                return Authors.findById(authorId);
            }
        }
    })
})

module.exports = BookType;