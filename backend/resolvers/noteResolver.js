module.exports = {
	Query: {
		note: async (parent, { id }, { models: { noteModel } }, info) => {
			const note = await noteModel.findById({ _id: id }).exec();
			return note;
		},
		allNotes: async (
			parent,
			args,
			{ models: { noteModel }, authUser },
			info
		) => {
			if (!authUser) {
				throw new Error('you are not Authenticated, please sign up/in');
			}
			const notes = await noteModel.find({ userId: authUser.id }).exec();
			return notes;
		},
	},

	Mutation: {
		createNote: async (
			parent,
			{ title, body },
			{ models: { noteModel }, authUser },
			info
		) => {
			const note = await noteModel.create({
				title,
				body,
				userId: authUser.id,
				updatedAt: new Date().toString(),
				createdAt: new Date().toString(),
			});
			return note;
		},
		updateNote: async (
			parent,
			{ id, title, body },
			{ models: { noteModel } },
			info
		) => {
			const newNote = await noteModel.findByIdAndUpdate(id, {
				title,
				body,
				updatedAt: new Date().toString(),
			});
			return newNote;
		},

		deleteNote: async (parent, { id }, { models: { noteModel } }, info) => {
			const deletedNote = await noteModel.findByIdAndDelete(id);
			return deletedNote;
		},
	},
};
