import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default {
	Query: {
		user: async (parent, { id }, { models: { userModel } }, info) => {
			const user = await userModel.findById({ _id: id }).exec();
			return user;
		},
	},

	Mutation: {
		createUser: async (
			parent,
			{ email, password },
			{ models: { userModel } },
			info
		) => {
			const hashedPassword = bcrypt.hashSync(password, 12);
			const user = await userModel.create({ email, password: hashedPassword });
			return user;
		},

		login: async (
			parent,
			{ email, password },
			{ models: { userModel } },
			info
		) => {
			const user = await userModel.findOne({ email }).exec();
			if (!user) {
				throw new Error('user not found');
			}
			const matchPasswords = bcrypt.compareSync(password, user.password);

			if (!matchPasswords) {
				throw new Error('password is not correct');
			}

			const token = jwt.sign({ id: user.id }, 'riddlemethis', {
				expiresIn: 24 * 10 * 50,
			});

			return {
				token,
			};
		},
	},

	User: {
		notes: async ({ id }, args, { models: { noteModel } }, info) => {
			const notes = await noteModel.find({ userId: id });
			return notes;
		},

		todos: async ({ id }, args, { models: { todoModel } }, info) => {
			const todos = await todoModel.find({ userId: id });
			return todos;
		},
	},
};
