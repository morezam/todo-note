import React from 'react';
import { useMutation } from '@apollo/client';
import { FaCheck } from 'react-icons/fa';
import { GET_TODOS } from '../../query/queries/todo';
import { CHANGE_COMPLETED } from '../../query/mutations/todo';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';
import { CheckWrapper, TodoLi } from './TodoStyles';

const Todo = ({ todo }) => {
	const [changeCompleted] = useMutation(CHANGE_COMPLETED);
	const onLiClick = todo => {
		changeCompleted({
			variables: {
				id: todo.id,
				title: todo.title,
				completed: todo.completed ? false : true,
			},
			refetchQueries: [
				{
					query: GET_TODOS,
				},
			],
			optimisticResponse: {
				updateTodo: {
					id: todo.id,
					completed: todo.completed ? false : true,
					__typename: 'Todo',
				},
			},
		});
	};

	return (
		<TodoLi>
			<CheckWrapper onClick={() => onLiClick(todo)}>
				<FaCheck style={{ display: `${todo.completed ? 'block' : 'none'}` }} />
			</CheckWrapper>
			<UpdateTodo todo={todo}>
				<DeleteTodo todoId={todo.id} />
			</UpdateTodo>
		</TodoLi>
	);
};

export default Todo;
