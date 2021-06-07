import styled from 'styled-components';

export const Parent = styled.div`
	display: flex;
	justify-content: center;
	@media only screen and (min-width: 1000px) {
		justify-content: initial;
	}
`;

export const Other = styled.div`
	position: relative;
	width: 90vw;
	@media only screen and (min-width: 1000px) {
		width: calc(100% - 300px);
	}
`;

export const Sidebar = styled.aside`
	display: none;
	background-color: var(--secondary-color);
	position: fixed;
	top: 0;
	width: 300px;
	bottom: 0;
	height: 100vh;
	z-index: 200;
	right: 0;

	@media only screen and (min-width: 1000px) {
		display: block;
	}
`;

export const BarsWrapper = styled.div`
	display: none;
	z-index: 100;
	height: 1rem;
	cursor: pointer;
	@media only screen and (min-width: 600px) {
		display: block;
	}
	@media only screen and (min-width: 1000px) {
		display: none;
	}
`;
