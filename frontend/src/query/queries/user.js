import { gql } from '@apollo/client';
export const GET_USER = gql`
	query ($id: ID!) {
		user(id: $id) {
			email
			id
			notes
			todos
		}
	}
`;

export const LOG_IN = gql`
	mutation ($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			userId
		}
	}
`;
