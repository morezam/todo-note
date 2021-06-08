import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './context/auth-context';
import { ModalContentProvider } from './context/modal-context';

import App from './components/App';
import { ThemeContextProvider } from './context/theme-context';

ReactDOM.render(
	<AuthContextProvider>
		<ModalContentProvider>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</ModalContentProvider>
	</AuthContextProvider>,
	document.querySelector('#root')
);
