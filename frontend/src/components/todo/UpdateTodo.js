import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { FaCheckCircle } from 'react-icons/fa';
import { UPDATE_TODO } from '../../query/mutations/todo';
import { GET_TODOS } from '../../query/queries/todo';
import { UpdateInput, TodoWrapper } from './TodoStyles';

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
		<TodoWrapper>
			<UpdateInput
				spellCheck={false}
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			{todo.title === title ? (
				children
			) : (
				<FaCheckCircle style={{ cursor: 'pointer' }} onClick={onUpdate} />
			)}
		</TodoWrapper>
	);
};

export default Input;
