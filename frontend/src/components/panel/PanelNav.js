import React from 'react';
import { FaEllipsisV, FaRegListAlt, FaTasks } from 'react-icons/fa';
import LogOut from '../user/LogOut';
import { NavTop, LinkNav } from './PanelNavStyles';

const PanelNav = () => {
	return (
		<NavTop>
			<LinkNav to="/panel">
				<FaRegListAlt />
			</LinkNav>
			<LinkNav to="panel/todos">
				<FaTasks />
			</LinkNav>
			{/* <LinkNav>
				<LogOut />
			</LinkNav> */}
		</NavTop>
	);
};

export default PanelNav;
