import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../../query/queries/todo';
import Todo from './Todo';
import CreateTodo from './CreateTodo';

const ShowTodos = () => {
	const { data, loading } = useQuery(GET_TODOS);
	console.log(data);
	if (loading) {
		return <p>Loading ..</p>;
	}
	return (
		<>
			<CreateTodo />
			<ul>
				{data?.allTodos
					.slice()
					.reverse()
					.map(todo => {
						return <Todo todo={todo} key={todo.id} />;
					})}
			</ul>
		</>
	);
};

export default ShowTodos;
