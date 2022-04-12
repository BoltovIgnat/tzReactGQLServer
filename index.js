require('dotenv').config()
var express = require('express');
var cors = require('cors')
var { graphqlHTTP } = require('express-graphql');
var mongoose = require('mongoose')
var schema = require('../tz-1-server/schema/schema')

var app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true,
}));

const start = async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		app.listen(3010);
	} catch (error) {
		console.log(error);
	}
}
start()

console.log('Running a GraphQL API server at http://localhost:3010/graphql');
