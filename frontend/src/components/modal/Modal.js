import React, { useRef, useEffect, useContext } from 'react';
import ModalContext from '../../context/modal-context';
import { Btn } from '../Btn';
import { BackGround, ModalContent, ModalMessage } from './ModalStyles';

const Modal = ({ onYes, onNo }) => {
	const backRef = useRef();
	const modalCtx = useContext(ModalContext);

	useEffect(() => {
		backRef.current.addEventListener('click', e => {
			if (e.target.id !== 'wrapper') {
				modalCtx.closeOpen();
			}
		});
	}, []);

	return (
		<BackGround ref={backRef} open={modalCtx.open}>
			<ModalContent id="wrapper">
				<ModalMessage id="wrapper">Are you sure?</ModalMessage>
				<div>
					<Btn primary bgcolor="green" onClick={onYes} id="wrapper">
						Yes
					</Btn>
					<Btn primary bgcolor="red" onClick={onNo} id="wrapper">
						No
					</Btn>
				</div>
			</ModalContent>
		</BackGround>
	);
};

export default Modal;
