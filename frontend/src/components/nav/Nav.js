import React, { useState } from 'react';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import {
	StyledLink,
	NavUlWrapper,
	NavUl,
	NavWrapper,
	NavBars,
	NavClose,
	LogoNav,
} from './NavStyles';
import Logo from '../Logo';
import Menu from '../menu';

const Nav = () => {
	const [active, setActive] = useState(false);

	return (
		<NavWrapper>
			<Menu />
			<LogoNav>
				<StyledLink to="/" color="#000">
					<Logo />
				</StyledLink>
			</LogoNav>

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
