import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

import schemas from './schemas';
import resolvers from './resolvers';

import userModel from './models/userModel';
import noteModel from './models/noteModel';
import todoModel from './models/todoModel';

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
			console.log(authUser);
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

server.listen().then(() => {
	mongoose.connect('mongodb://localhost:27017/graphql');
});
