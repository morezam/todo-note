import styled from 'styled-components';

export const HomeWrapper = styled.section`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
	/* background-color: rgba(108, 99, 255, 0.3); */
	height: 95vh;
	background-image: linear-gradient(
			rgba(57, 62, 70, 0.9),
			rgba(247, 243, 233, 0.8)
		),
		url('img/hero.jpg');
	background-position: center;
	background-size: cover;
	/* @media only screen and (min-width: 800px) {
		flex-direction: row;
	} */
`;

export const HomeContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	/* width: 50%; */
`;

export const HomeP = styled.p`
	position: relative;
	margin: 3rem 2rem 3rem 2rem;
	font-size: 1.9rem;
	line-height: 1.6;
	max-width: 70rem;
	text-align: center;
`;
