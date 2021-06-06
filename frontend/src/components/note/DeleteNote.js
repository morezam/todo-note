import React from 'react';
import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { DELETE_NOTE } from '../../query/mutations/note';
import { GET_NOTES } from '../../query/queries/note';
import { DeleteIcon } from './NoteStyles';

const DeleteNote = ({ noteId }) => {
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

	return (
		<DeleteIcon onClick={() => onSpanClick(noteId)}>
			<FaTrash />
		</DeleteIcon>
	);
};

export default DeleteNote;
