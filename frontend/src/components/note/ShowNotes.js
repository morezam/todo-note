import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import fromNow from 'fromnow';
import {
	NotesWrapper,
	NoteCreate,
	NoteUl,
	NoteLink,
	NoteP,
	NoteTime,
} from './NoteStyles';
import { H4 } from '../Typographi';
import DeleteNote from './DeleteNote';
import { GET_NOTES } from '../../query/queries/note';

const ShowNotes = () => {
	const { data, loading } = useQuery(GET_NOTES);
	if (loading) {
		return <p>Loading ...</p>;
	}

	return (
		<NotesWrapper>
			<NoteCreate>
				<Link to="/panel/create">
					<FaPlus />
				</Link>
			</NoteCreate>
			<NoteUl>
				{data.allNotes
					.slice()
					.map(note => {
						const timee = new Date(note.updatedAt).getTime();
						return { ...note, updatedAt: timee };
					})
					.sort((a, b) => b.updatedAt - a.updatedAt)
					.map(note => {
						return (
							<div style={{ position: 'relative' }} key={note.id}>
								<NoteLink
									to={{ pathname: `/panel/note/${note.id}`, state: note }}>
									<li>
										<H4>{note.title}</H4>
										<NoteP>
											{note.body.length > 100
												? note.body.substring(0, 100) + '...'
												: note.body.substring(0, 100) + ''}
										</NoteP>
									</li>
									<NoteTime>
										{fromNow(note.updatedAt, {
											and: false,
											suffix: true,
											max: 1,
										})}
									</NoteTime>
								</NoteLink>
								<DeleteNote noteId={note.id} />
							</div>
						);
					})}
			</NoteUl>
		</NotesWrapper>
	);
};

export default ShowNotes;
