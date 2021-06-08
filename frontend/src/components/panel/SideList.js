import React, { useContext } from 'react';
import { FaRegListAlt, FaRegPlusSquare, FaTasks } from 'react-icons/fa';
import { useHistory } from 'react-router';
import AuthContext from '../../context/auth-context';
import Logo from '../Logo';
import LogOut from '../user/LogOut';
import { StyledLink, Ul } from './SideListStyles';

const SideList = () => {
	const authCtx = useContext(AuthContext);
	const history = useHistory();
	const onHomeClick = () => {
		history.replace('/');
		authCtx.logOut();
	};

	return (
		<Ul>
			<li>
				<StyledLink to="/" onClick={onHomeClick}>
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
