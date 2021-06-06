import { gql } from '@apollo/client';
export const GET_USER = gql`
	query ($id: ID!) {
		user(id: $id) {
			email
			id
			notes {
				title
				body
				updatedAt
				id
			}
		}
	}
`;
