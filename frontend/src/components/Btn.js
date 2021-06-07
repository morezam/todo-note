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
			background-color: ${({ bgcolor }) =>
				bgcolor ? bgcolor : 'var(--primary-color)'};

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

	${({ logout }) =>
		logout &&
		css`
			font-size: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;

			background-color: var(--secondary-color);

			/* @media only screen and (min-width: 500px) {
				position: relative;
			} */
			@media only screen and (min-width: 1000px) {
				width: 100%;
				position: relative;
				border-radius: 0;
			}
		`}

	${({ todo }) =>
		todo &&
		css`
			color: var(--color-primary);
			border: 1px solid transparent;
			padding: 1rem;
			margin-left: 2rem;
			background-color: green;
			font-size: 2rem;
			border-radius: 1rem;

			@media only screen and (min-width: 400px) {
				padding: 1.5rem 3rem;
			}
			&:hover {
				background-color: green;
				opacity: 0.8;
			}
		`}
`;
