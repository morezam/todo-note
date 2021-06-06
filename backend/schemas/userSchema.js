import { gql } from 'apollo-server';

export default gql`
	type User {
		email: String!
		id: ID!
		notes: [Note!]!
		todos: [Todo!]!
	}

	type Token {
		token: String!
	}

	extend type Query {
		user(id: ID!): User!
	}

	extend type Mutation {
		createUser(email: String!, password: String!): User!
		login(email: String!, password: String!): Token!
	}
`;
