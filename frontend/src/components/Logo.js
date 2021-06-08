import React from 'react';
import styled from 'styled-components';
import { FaBookOpen } from 'react-icons/fa';

export const LogoWrapper = styled.p`
	font-size: 2.5rem;
	display: flex;
	align-items: center;
	align-items: center;
	/* font-family: 'Baloo Tammudu 2', cursive; */
	color: #333;
	margin: 1rem;
`;

const Logo = () => {
	return (
		<LogoWrapper>
			<FaBookOpen /> <span style={{ visibility: 'hidden' }}>..</span>
			<p> NOTY</p>
		</LogoWrapper>
	);
};

export default Logo;
