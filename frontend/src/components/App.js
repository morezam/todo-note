import React, { useContext } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Login from './Login';
import AuthContext from '../context/auth-context';

const App = () => {
	const authCtx = useContext(AuthContext);
	return (
		<ApolloProvider
			client={
				new ApolloClient({
					cache: new InMemoryCache(),
					uri: 'http://localhost:4000/',
					headers: {
						token: authCtx.isAuthenticated || '',
					},
				})
			}>
			<Login />
		</ApolloProvider>
	);
};

export default App;
