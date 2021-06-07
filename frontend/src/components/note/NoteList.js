import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import fromnow from 'fromnow';
import { FaTrash } from 'react-icons/fa';
import { DELETE_NOTE } from '../../query/mutations/note';
import { GET_NOTES } from '../../query/queries/note';
import Modal from '../modal/Modal';
import { H4 } from '../Typographi';
import { DeleteIcon, NoteLink, NoteP, NoteTime } from './NoteStyles';
import ModalContext from '../../context/modal-context';

const NoteList = ({ allNotes }) => {
	const [noteId, setNoteId] = useState('');
	const modalCtx = useContext(ModalContext);

	const [deleteNote] = useMutation(DELETE_NOTE, {
		update(cache) {
			cache.modify({
				fields: {
					allNotes() {
						const datas = cache.readQuery({
							query: GET_NOTES,
						});
						return datas.allNotes.filter(note => note.id !== noteId);
					},
				},
			});
		},
	});

	const onSpanClick = noteId => {
		deleteNote({
			variables: {
				id: noteId,
			},
		});
	};
	return allNotes
		.slice()
		.map(note => {
			const timee = new Date(note.updatedAt).getTime();
			return { ...note, updatedAt: timee };
		})
		.sort((a, b) => b.updatedAt - a.updatedAt)
		.map(note => {
			return (
				<>
					<div style={{ position: 'relative' }} key={note.id}>
						<NoteLink to={{ pathname: `/panel/note/${note.id}`, state: note }}>
							<li>
								<H4>{note.title}</H4>
								<NoteP>
									{note.body.length > 100
										? note.body.substring(0, 100) + '...'
										: note.body.substring(0, 100) + ''}
								</NoteP>
							</li>
							<NoteTime>
								{fromnow(note.updatedAt, {
									and: false,
									suffix: true,
									max: 1,
								})}
							</NoteTime>
						</NoteLink>
						<DeleteIcon
							onClick={() => {
								modalCtx.openOpen();
								setNoteId(note.id);
							}}>
							<FaTrash />
						</DeleteIcon>
					</div>
					<Modal
						onYes={() => {
							onSpanClick(noteId);
							modalCtx.closeOpen();
						}}
						onNo={() => modalCtx.closeOpen()}
					/>
				</>
			);
		});
};

export default NoteList;
