import { createContext, useState } from 'react';

const ModalContext = createContext({
	open: false,
	openOpen: () => {},
	closeOpen: () => {},
});

export default ModalContext;

export const ModalContentProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const openOpen = () => {
		setOpen(true);
	};
	const closeOpen = () => {
		setOpen(false);
	};

	const context = {
		open,
		openOpen,
		closeOpen,
	};
	return (
		<ModalContext.Provider value={context}>{children}</ModalContext.Provider>
	);
};
