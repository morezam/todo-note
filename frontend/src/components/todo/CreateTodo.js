import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TODO } from '../../query/mutations/todo';
import { GET_TODOS } from '../../query/queries/todo';

const CreateTodo = () => {
	const [title, setTitle] = useState('');
	const [addTodo] = useMutation(CREATE_TODO);

	const onButtonClick = () => {
		addTodo({
			variables: {
				title,
				completed: false,
			},
			refetchQueries: [
				{
					query: GET_TODOS,
				},
			],
		});
		setTitle('');
	};

	return (
		<>
			<form onSubmit={e => e.preventDefault()}>
				<input
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder="Enter New Todo"
				/>

				<button onClick={onButtonClick}>Done</button>
			</form>
		</>
	);
};

export default CreateTodo;
