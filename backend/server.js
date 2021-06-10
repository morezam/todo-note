const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();
const { ApolloServer } = require('apollo-server');

const schemas = require('./schemas');
const resolvers = require('./resolvers');

const userModel = require('./models/userModel');
const noteModel = require('./models/noteModel');
const todoModel = require('./models/todoModel');

const getUser = async req => {
	const token = req.headers['token'];
	if (token) {
		try {
			return await jwt.verify(token, 'riddlemethis');
		} catch (e) {
			throw new Error('Your session expired. Sign in again.');
		}
	}
};

const server = new ApolloServer({
	typeDefs: schemas,
	resolvers,
	context: async ({ req }) => {
		if (req) {
			const authUser = await getUser(req);
			return {
				authUser,
				models: {
					userModel,
					noteModel,
					todoModel,
				},
			};
		}
	},
});

server.listen({ port: process.env.PORT || 4000 }).then(() => {
	mongoose.connect(
		`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@noteql.1xvf4.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
	);
});
