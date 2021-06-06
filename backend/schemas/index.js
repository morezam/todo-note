import { gql } from 'apollo-server';
import userSchema from './userSchema';
import todoSchema from './todoSchema';
import noteSchema from './noteSchema';

const linkSchema = gql`
	type Query {
		_: Boolean
	}
	type Mutation {
		_: Boolean
	}
`;

export default [linkSchema, userSchema, noteSchema, todoSchema];
