import { gql } from '@apollo/client';

export const GET_TODOS = gql`
	{
		allTodos {
			id
			title
			completed
		}
	}
`;
