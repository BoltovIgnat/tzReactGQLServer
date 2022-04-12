const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLInt } = graphql

const BookType = require('./types/book-type');
const AuthorType = require('./types/author-type');

const Books = require('../models/book');
const Authors = require('../models/author')

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addBook: {
            type: BookType,
            args: {
                id: { type: GraphQLID },
                title: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, { id, title, description, authorId }) {
                const books = new Books({
                    id,
                    title,
                    description,
                    authorId
                })
                return books.save()
            }
        },
        deleteBook: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return Books.findByIdAndRemove(id);
            }
        },

        addAuthor: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID },
                fio: { type: new GraphQLNonNull(GraphQLString) },
                surname: { type: GraphQLString },
                name: { type: GraphQLString },
                patronymic: { type: GraphQLString },
                yearLife: { type: new GraphQLNonNull(GraphQLString) },
                bookId: { type: GraphQLID },
            },
            resolve(parent, { id, fio, surname, name, patronymic, yearLife, bookId }) {
                const books = new Authors({
                    id,
                    fio,
                    surname,
                    name,
                    patronymic,
                    yearLife,
                    bookId
                })
                return books.save()
            }
        },
        deleteAuthor: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return Authors.findByIdAndRemove(id);
            }
        },
    }
})

module.exports = Mutation;