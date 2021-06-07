import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
	list-style: none;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	display: flex;
	color: #231e23;
	align-items: center;
	font-size: 2.5rem;
	margin: 0 0 1rem 0;
	padding: 2rem;
	& > * {
		margin-right: 5rem;
	}

	&:hover {
		background-color: #deeeea;
	}
`;
