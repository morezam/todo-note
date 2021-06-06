import { gql } from '@apollo/client';

export const GET_NOTES = gql`
	query ($userId: ID!) {
		allNotes(userId: $userId) {
			title
			body
			id
			createAt
			updateAt
			userId
		}
	}
`;
