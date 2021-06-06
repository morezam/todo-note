import { gql } from 'apollo-server';

export default gql`
	type Todo {
		title: String!
		userId: ID!
		completed: Boolean
	}

	extend type Query {
		allTodos: [Todo!]!
	}

	extend type Mutation {
		createTodo(title: String!, completed: Boolean!): Todo!
		updateTodo(id: ID!, title: String, completed: Boolean): Todo!
		deleteTodo(id: ID!): Todo
	}
`;
