const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLSchema } = graphql

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        fio: { type: new GraphQLNonNull(GraphQLString) },
        surname: { type: GraphQLString },
        name: { type: GraphQLString },
        patronymic: { type: GraphQLString },
        yearLife: { type: new GraphQLNonNull(GraphQLString) },
    })
})

module.exports = AuthorType;