import React, { useState, useEffect } from 'react';
import { FaEllipsisV, FaRegListAlt, FaTasks } from 'react-icons/fa';
import Modes from '../Modes';
import LogOut from '../user/LogOut';
import { NavTop, LinkNav, NavListWrap, NavList } from './PanelNavStyles';

const PanelNav = () => {
	const [open, setOpen] = useState(false);

	return (
		<NavTop>
			<LinkNav to="/panel">
				<FaRegListAlt />
			</LinkNav>
			<LinkNav to="/panel/todos">
				<FaTasks />
			</LinkNav>
			<LinkNav
				style={{ position: 'absolute', right: '0', zIndex: '200' }}
				onClick={() => setOpen(!open)}>
				<FaEllipsisV />
			</LinkNav>
			<NavListWrap open={open} onClick={() => setOpen(!open)}>
				<NavList>
					<Modes withText />
					<LogOut />
				</NavList>
			</NavListWrap>
		</NavTop>
	);
};

export default PanelNav;
