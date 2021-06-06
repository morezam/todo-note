import { gql } from '@apollo/client';

export const SIGN_UP = gql`
	mutation ($email: String!, $password: String!) {
		createUser(email: $email, password: $password) {
			email
			id
		}
	}
`;

export const LOG_OUT = gql`
	mutation {
		logOut {
			id
		}
	}
`;
