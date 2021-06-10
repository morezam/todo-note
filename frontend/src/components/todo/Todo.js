import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { FaCheck } from 'react-icons/fa';
import { CHANGE_COMPLETED } from '../../query/mutations/todo';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';
import { CheckWrapper, TodoLi } from './TodoStyles';

const Todo = ({ todo }) => {
	const [hide, setHide] = useState(false);
	const [changeCompleted] = useMutation(CHANGE_COMPLETED);
	const onLiClick = todo => {
		changeCompleted({
			variables: {
				id: todo.id,
				title: todo.title,
				completed: todo.completed === true ? false : true,
			},
		});
	};

	return (
		<TodoLi>
			<CheckWrapper
				onClick={() => {
					onLiClick(todo);
					setHide(!hide);
				}}>
				<FaCheck
					style={{
						display: `${hide ? 'none' : 'block'}`,
						color: 'inherit',
					}}
				/>
			</CheckWrapper>
			<UpdateTodo todo={todo}>
				<DeleteTodo todoId={todo.id} />
			</UpdateTodo>
		</TodoLi>
	);
};

export default Todo;
