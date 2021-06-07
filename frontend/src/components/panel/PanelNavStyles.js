import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavTop = styled.nav`
	position: absolute;
	top: 0;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	margin-bottom: 10rem;
	@media only screen and (min-width: 1000px) {
		display: none;
	}
`;

export const LinkNav = styled(Link)`
	font-size: 2.5rem;
	text-decoration: none;
	color: var(--primary-color);
	cursor: pointer;
	z-index: 200;
	margin: 1rem 4rem;

	/* &:last-of-type {
		position: absolute;
		right: 0;
	} */
`;
