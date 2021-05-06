const userSchema = require('../schema/user');

exports.addUser = async (data) => {
	await userSchema(data).save();
};
