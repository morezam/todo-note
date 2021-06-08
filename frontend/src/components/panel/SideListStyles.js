import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
	list-style: none;
	&:first-child {
		margin-top: 7rem;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	display: flex;
	color: ${({ theme }) => theme.noteColor};
	align-items: center;
	font-size: 2.5rem;
	margin: 2rem 0;
	padding: 2rem;
	& > * {
		margin-right: 5rem;
	}

	&:hover {
		background-color: ${({ theme }) => theme.noteColor};
		color: ${({ theme }) => theme.noteBack};
	}
`;
