import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { FaCheckCircle, FaArrowAltCircleLeft } from 'react-icons/fa';
import { UPDATE_NOTE } from '../../query/mutations/note';
import { GET_NOTES } from '../../query/queries/note';
import {
	NoteWrapper,
	InputsWrapper,
	NoteInput,
	NoteCheck,
	TextArea,
	BackLink,
} from './NoteStyles';

const ShowNote = props => {
	const { title, body } = props.location.state;
	const [newTitle, setNewTitle] = useState(title);
	const [newBody, setNewBody] = useState(body);
	const [updateNote] = useMutation(UPDATE_NOTE, {
		update(cache) {
			cache.modify({
				fields: {
					allNotes() {
						return cache.readQuery({
							query: GET_NOTES,
							variables: { userId: props.location.state.userId },
						});
					},
				},
			});
		},
	});
	const history = useHistory();

	const onDivClick = () => {
		updateNote({
			variables: {
				id: props.match.params.id,
				title: newTitle,
				body: newBody,
			},
		}).then(() => {
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
						value={newTitle}
						onChange={e => setNewTitle(e.target.value)}
						spellCheck="false"
					/>
					<TextArea
						spellCheck="false"
						value={newBody}
						onChange={e => setNewBody(e.target.value)}></TextArea>
					{newTitle !== title || newBody !== body ? (
						<NoteCheck onClick={onDivClick}>
							<FaCheckCircle />
						</NoteCheck>
					) : (
						''
					)}
				</InputsWrapper>
			</NoteWrapper>
		</>
	);
};

export default ShowNote;
