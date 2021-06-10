const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
});

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;
