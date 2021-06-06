export default {
	Query: {
		allTodos: async (
			parent,
			args,
			{ models: { todoModel }, authUser },
			info
		) => {
			const todos = await todoModel.find({ userId: authUser.id }).exec();
			return todos;
		},
	},

	Mutation: {
		createTodo: async (
			parent,
			{ title, completed },
			{ models: { todoModel }, authUser },
			info
		) => {
			const todo = await todoModel.create({
				title,
				completed,
				userId: authUser.id,
			});
			return todo;
		},

		updateTodo: async (
			parent,
			{ id, title, completed },
			{ models: { todoModel } },
			info
		) => {
			const newTodo = await todoModel.findByIdAndUpdate(id, {
				title,
				completed,
			});
			return newTodo;
		},

		deleteTodo: async (parent, { id }, { models: { todoModel } }, info) => {
			const deletedTodo = await todoModel.findByIdAndDelete(id);
			return deletedTodo;
		},
	},
};
