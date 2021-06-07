import React from 'react';
import { FaRegListAlt, FaRegPlusSquare, FaTasks } from 'react-icons/fa';
import Logo from '../Logo';
import LogOut from '../user/LogOut';
import { StyledLink, Ul } from './SideListStyles';

const SideList = () => {
	return (
		<Ul>
			<li>
				<StyledLink to="/">
					<Logo />
				</StyledLink>
			</li>
			<li>
				<StyledLink to="/panel">
					<FaRegListAlt />
					All Notes
				</StyledLink>
			</li>
			<li>
				<StyledLink to="/panel/create">
					<FaRegPlusSquare />
					create new note
				</StyledLink>
			</li>
			<li>
				<StyledLink to="/panel/todos">
					<FaTasks />
					todos
				</StyledLink>
			</li>
			<li style={{ position: 'absolute', bottom: '0', width: '100%' }}>
				<LogOut />
			</li>
		</Ul>
	);
};

export default SideList;
