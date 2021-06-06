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
	width: 0;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	bottom: 0;
	height: 100vh;
	z-index: 2;
	right: 0;
	@media only screen and (min-width: 1000px) {
		width: 300px;
	}
`;

export const BarWrapper = styled.div`
	display: none;
`;
