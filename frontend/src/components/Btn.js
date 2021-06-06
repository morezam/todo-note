import styled, { css } from 'styled-components';

export const Btn = styled.button`
	font-family: inherit;
	font-size: 1.6rem;
	border-radius: 0.5rem;
	padding: 1.2rem 2rem;
	transition: all 0.3s;
	border: 0;
	cursor: pointer;

	&:hover {
		background-color: #fff;
	}
	&:focus {
		outline: 0;
	}
	&:active {
		transform: scale(0.97);
	}

	${({ primary }) =>
		primary &&
		css`
			color: #fff;
			background-color: var(--primary-color);
			border: 1px solid currentColor;
			align-self: center;
			font-size: 2.5rem;
			padding: 1.5rem 4rem;
			text-decoration: none;
			&:hover {
				color: var(--primary-color);
			}
		`}

	${({ secondary }) =>
		secondary &&
		css`
			color: #fff;
			background-color: var(--secondary-color);
			border: 1px solid transparent;
			&:hover {
				color: var(--secondary-color);
				border: 1px solid currentColor;
			}
			padding: 2rem 3rem;
			min-width: 30vw;
			font-size: 2rem;
		`}

	${({ tertiary }) =>
		tertiary &&
		css`
			color: var(--primary-color-dark);
			border: 1px solid #fff;

			&:hover {
				border: 1px solid var(--primary-color-dark);
			}
		`}

	${({ nav }) =>
		nav &&
		css`
			color: #fff;
			border: 1px solid #fff;
			background-color: transparent;
			width: 80vw;
			padding: 2rem 0;
			font-size: 2rem;
			&:hover {
				background-color: transparent;
			}
		`}
`;
