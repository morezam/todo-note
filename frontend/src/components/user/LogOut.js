import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';

const LogOut = () => {
	const authCtx = useContext(AuthContext);
	const onBtnClick = () => {
		authCtx.logOut();
	};

	return <button onClick={onBtnClick}>Logout</button>;
};

export default LogOut;
