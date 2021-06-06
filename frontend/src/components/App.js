import React, { useContext } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './Base';
import Home from './home/Home';
import LogIn from './user/LogIn';
import Panel from './panel/Panel';
import SignUp from './user/SignUp';
import Features from './features/Features';
import Footer from './footer';
import AuthContext from '../context/auth-context';

const App = () => {
	const authCtx = useContext(AuthContext);
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
					<Route path="/panel" render={props => <Panel {...props} />} />
				</Switch>
			</Router>
		</ApolloProvider>
	);
};

export default App;
