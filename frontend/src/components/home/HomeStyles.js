import styled from 'styled-components';

export const HomeWrapper = styled.section`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
	/* background-color: rgba(108, 99, 255, 0.3); */
	height: 95vh;
	background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
		url('img/hero-2.jpg');
	background-position: center;
	background-size: cover;
`;

export const HomeContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	color: var(--white-color);
`;

export const HomeP = styled.p`
	position: relative;
	margin: 1rem 2rem 5rem 2rem;
	font-size: 2rem;
	line-height: 1.6;
	max-width: 70rem;
	text-align: center;
`;
