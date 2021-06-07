import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { NotesWrapper, NoteCreate, NoteUl } from './NoteStyles';
import { GET_NOTES } from '../../query/queries/note';
import NoteList from './NoteList';

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
				<NoteList allNotes={data.allNotes} />
			</NoteUl>
		</NotesWrapper>
	);
};

export default ShowNotes;
