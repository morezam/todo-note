import React from 'react';
import styled from 'styled-components';
import { FaBookOpen } from 'react-icons/fa';

export const LogoWrapper = styled.p`
	font-size: 2.5rem;
	display: flex;
	align-items: center;
	font-family: 'Krona One', sans-serif;
	margin: 1rem;
`;

const Logo = () => {
	return (
		<LogoWrapper>
			<FaBookOpen />
			..NOTY
		</LogoWrapper>
	);
};

export default Logo;
