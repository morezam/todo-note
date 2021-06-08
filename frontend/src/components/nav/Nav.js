import React, { useState } from 'react';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import {
	StyledLink,
	NavUlWrapper,
	NavUl,
	NavWrapper,
	NavBars,
	NavClose,
} from './NavStyles';
import Logo from '../Logo';

const Nav = () => {
	const [active, setActive] = useState(false);

	return (
		<NavWrapper>
			<div>
				<StyledLink to="/" color="#000">
					<Logo />
				</StyledLink>
			</div>
			<NavBars onClick={() => setActive(!active)}>
				<FaBars />
			</NavBars>
			<NavUlWrapper active={active}>
				<NavClose onClick={() => setActive(!active)}>
					<FaWindowClose />
				</NavClose>
				<NavUl>
					<li>
						<StyledLink to="/">Home</StyledLink>
					</li>
					<li>
						<StyledLink to="signup">Signup</StyledLink>
					</li>
					<li>
						<StyledLink to="login">Login</StyledLink>
					</li>
				</NavUl>
			</NavUlWrapper>
		</NavWrapper>
	);
};

export default Nav;
