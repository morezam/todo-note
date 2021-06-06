import { gql } from '@apollo/client';

export const GET_NOTES = gql`
	query {
		allNotes {
			title
			body
			createdAt
			updatedAt
			id
			userId
		}
	}
`;
