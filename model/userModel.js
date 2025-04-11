const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	}
	,email: {
		type: String,
		required: true,
		unique: true
	}
	,password: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
		default: "/image/2024.png",
	},
token:{
	type: String,
	},
	verificationCode: {
		type: String,
	},
	verified: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},

},{
	versionKey: false,
});
module.exports = mongoose.model('User', userSchema);