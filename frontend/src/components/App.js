import React, { useContext, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Base';
import Home from './home/Home';
import LogIn from './user/LogIn';
import Panel from './panel/Panel';
import SignUp from './user/SignUp';
import Features from './features/Features';
import Footer from './footer';
import AuthContext from '../context/auth-context';
import { lightTheme, darkTheme } from './Theme';
import ThemeContext from '../context/theme-context';

const App = () => {
	const authCtx = useContext(AuthContext);
	const themeCtx = useContext(ThemeContext);

	return (
		<ApolloProvider
			client={
				new ApolloClient({
					cache: new InMemoryCache(),
					uri: 'http://localhost:4000',
					headers: {
						token: authCtx.isAuthenticated || '',
					},
				})
			}>
			<ThemeProvider
				theme={themeCtx.theme === 'light' ? lightTheme : darkTheme}>
				<Router>
					<GlobalStyle />
					<Switch>
						<Route exact path="/">
							<Home />
							<Features />
							<Footer />
						</Route>
						<Route path="/signup">
							<SignUp />
						</Route>
						<Route path="/login">
							<LogIn />
						</Route>
						<Route path="/panel">
							<Panel />
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default App;
