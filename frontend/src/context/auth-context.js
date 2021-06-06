import { createContext, useState } from 'react';

const AuthContext = createContext({
	isAuthenticated: null,
	logIn: () => {},
	logOut: () => {},
});

export default AuthContext;

export const AuthContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(null);

	const logIn = token => {
		setIsAuthenticated(token);
	};

	const logOut = () => {
		setIsAuthenticated(null);
	};

	const context = {
		isAuthenticated,
		logIn,
		logOut,
	};
	return (
		<AuthContext.Provider value={context}>{children}</AuthContext.Provider>
	);
};
