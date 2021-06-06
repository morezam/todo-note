import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_TODO } from '../../query/mutations/todo';
import { GET_TODOS } from '../../query/queries/todo';

const Input = ({ todo, children }) => {
	const [title, setTitle] = useState(todo.title);
	const [updateTodo] = useMutation(UPDATE_TODO);

	const onUpdate = () => {
		updateTodo({
			variables: {
				id: todo.id,
				title,
				completed: todo.completed,
			},
			refetchQueries: [
				{
					query: GET_TODOS,
				},
			],
		});
	};

	return (
		<div>
			<input value={title} onChange={e => setTitle(e.target.value)} />
			{todo.title === title ? children : <button onClick={onUpdate}>C</button>}
		</div>
	);
};

export default Input;
