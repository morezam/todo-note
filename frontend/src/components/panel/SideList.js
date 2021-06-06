import React from 'react';
import { StyledLink, Ul } from './SideListStyles';

const SideList = () => {
	return (
		<Ul>
			<li>
				<StyledLink to="/panel">All Notes</StyledLink>
			</li>
			<li>
				<StyledLink to="/panel/create">create new note</StyledLink>
			</li>
			<li>
				<StyledLink to="/panel/todos">todos</StyledLink>
			</li>
		</Ul>
	);
};

export default SideList;
