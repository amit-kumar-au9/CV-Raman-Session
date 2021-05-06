const userSchema = require('../schema/user');

exports.addUser = async (req, res, next) => {
	try {
		const data = {
			email: req.body.email,
			name: req.body.name,
			password: req.body.password,
		};
		const insertedData = await userSchema(data).save();
		res.json({ message: 'User added', data: insertedData });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'server error' });
	}
};

exports.updateUser = async (req, res, next) => {
	try {
		const data = {
			email: req.body.email,
			name: req.body.name,
			password: req.body.password,
		};
		console.log(req.query);
		const updatedData = await userSchema.findOneAndUpdate(
			{ name: req.query.name },
			data,
		);
		if (updatedData) {
			res.json({ message: 'User updated', data: updatedData });
		} else {
			res.json({ message: 'User not found' });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'server error' });
	}
};
