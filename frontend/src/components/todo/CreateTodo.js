import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TODO } from '../../query/mutations/todo';
import { GET_TODOS } from '../../query/queries/todo';
import { Btn } from '../Btn';
import { TodoInput, TodoForm } from './TodoStyles';

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
			<TodoForm onSubmit={e => e.preventDefault()}>
				<TodoInput
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder="Enter New Todo"
				/>

				<Btn todo onClick={onButtonClick}>
					Done
				</Btn>
			</TodoForm>
		</>
	);
};

export default CreateTodo;
