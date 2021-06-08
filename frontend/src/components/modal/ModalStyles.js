import styled from 'styled-components';

export const BackGround = styled.div`
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	display: ${({ open }) => (open ? 'flex' : 'none')};
	flex-direction: column;
	z-index: 20;
`;

export const ModalContent = styled.div`
	background-color: ${({ theme }) => theme.noteBack};
	width: 90vw;
	height: 20rem;
	border-radius: 1rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	@media only screen and (min-width: 400px) {
		width: 60vw;
	}
	@media only screen and (min-width: 800px) {
		width: 40vw;
	}
`;

export const ModalMessage = styled.p`
	font-size: 2.5rem;
`;
