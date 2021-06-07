import React from 'react';
import { useMutation } from '@apollo/client';
import { GET_TODOS } from '../../query/queries/todo';
import { DELETE_TODO } from '../../query/mutations/todo';
import { FaTrash } from 'react-icons/fa';

const DeleteTodo = ({ todoId }) => {
	const [deleteTodo] = useMutation(DELETE_TODO, {
		update(cache) {
			cache.modify({
				fields: {
					allTodos() {
						const datas = cache.readQuery({
							query: GET_TODOS,
						});
						return datas.allTodos.filter(todo => todo.id !== todoId);
					},
				},
			});
		},
	});

	const onTodoDelete = id => {
		deleteTodo({
			variables: {
				id,
			},
		});
	};
	return (
		<FaTrash
			onClick={() => onTodoDelete(todoId)}
			style={{ cursor: 'pointer' }}
		/>
	);
};

export default DeleteTodo;
