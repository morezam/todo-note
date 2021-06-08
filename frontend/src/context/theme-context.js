import { createContext, useState } from 'react';

const ThemeContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
});

export default ThemeContext;

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	const context = {
		theme,
		toggleTheme,
	};
	return (
		<ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
	);
};
