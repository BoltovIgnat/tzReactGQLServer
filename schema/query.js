const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql

const BookType = require('./types/book-type');
const AuthorType = require('./types/author-type');

const Books = require('../models/book');
const Authors = require('../models/author')

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return Books.findById(id)
            }
        },
        bookByName: {
            type: BookType,
            args: { name: { type: graphql.GraphQLString } },
            resolve(parent, { name }) {
                return Books.findOne({title: name});
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve() {
                return Books.find({});
            }
        },

        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return Authors.findById(id)
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve() {
                return Authors.find({});
            }
        },
    } 
})

module.exports = Query;