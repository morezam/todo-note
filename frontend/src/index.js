import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './context/auth-context';
import { ModalContentProvider } from './context/modal-context';

import App from './components/App';

ReactDOM.render(
	<AuthContextProvider>
		<ModalContentProvider>
			<App />
		</ModalContentProvider>
	</AuthContextProvider>,
	document.querySelector('#root')
);
