const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	email: { 
		type: String, 
		required: true, 
		unique: true, 
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ ,
		},
	password: { type: String, required: true, },
	username: {type: String, required: true},
	uplayAccount: String,
	admin: Boolean,
	moderator: Boolean,
	dateJoined: { type : Date, default: Math.floor(new Date().getTime()/1000.0) }
})

userSchema.set('toJSON', {
	transform: function(doc, ret, opt) {
		delete ret['password']
		return ret
	}
  })

module.exports = mongoose.model('User', userSchema)