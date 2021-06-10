const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	notes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'note',
		},
	],
	todos: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'todo',
		},
	],
});

const user = mongoose.model('user', userSchema);

module.exports = user;
