import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { FaCheckCircle, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ADD_NOTE } from '../../query/mutations/note';
import { GET_NOTES } from '../../query/queries/note';
import {
	NoteWrapper,
	InputsWrapper,
	NoteInput,
	NoteCheck,
	TextArea,
	BackLink,
} from './NoteStyles';

const CreateNote = ({ userId }) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const history = useHistory();

	const [addNote] = useMutation(ADD_NOTE, {
		update(cache, { data: { addNote } }) {
			cache.modify({
				fields: {
					allNotes(existingNotes = []) {
						const newNoteRef = cache.writeQuery({
							data: addNote,
							query: GET_NOTES,
						});
						return [...existingNotes, newNoteRef];
					},
				},
			});
		},
	});

	const onButtonClick = userId => {
		addNote({
			variables: {
				title,
				body,
				userId,
			},
		}).then(res => {
			history.push('/panel');
		});
	};

	return (
		<>
			<BackLink to="/panel">
				<FaArrowAltCircleLeft />
			</BackLink>
			<NoteWrapper>
				<InputsWrapper>
					<NoteInput
						value={title}
						onChange={e => setTitle(e.target.value)}
						spellCheck="false"
						placeholder="Title"
					/>
					<TextArea
						spellCheck="false"
						value={body}
						onChange={e => setBody(e.target.value)}></TextArea>

					<NoteCheck onClick={() => onButtonClick(userId)}>
						<FaCheckCircle />
					</NoteCheck>
				</InputsWrapper>
			</NoteWrapper>
		</>
	);
};

export default CreateNote;
