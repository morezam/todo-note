import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './context/auth-context';

import App from './components/App';

ReactDOM.render(
	<AuthContextProvider>
		<App />
	</AuthContextProvider>,
	document.querySelector('#root')
);
