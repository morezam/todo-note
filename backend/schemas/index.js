const { gql } = require('apollo-server');
const userSchema = require('./userSchema');
const todoSchema = require('./todoSchema');
const noteSchema = require('./noteSchema');

const linkSchema = gql`
	type Query {
		_: Boolean
	}
	type Mutation {
		_: Boolean
	}
`;

module.exports = [linkSchema, userSchema, noteSchema, todoSchema];
