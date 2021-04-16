const Router = require('express').Router();

const validationMiddleware = (req, res, next) => {
	const { name, email, phone } = req.body;
	if (name.length >= 4 && email.length >= 4 && phone.length === 10) {
		// the data is correct
		next();
	} else {
		// the data is not correct
		return res.send('Validation is wrong');
	}
};

const getDetailsMiddleware = (req, res) => {
	res.send('its working');
};

Router.post('/getDetails', validationMiddleware, getDetailsMiddleware);

Router.post('/login', (req, res) => {
	//code
});

Router.post('/register', (req, res) => {
	//code
});

Router.post('/updateData', (req, res) => {
	//code
});

Router.post('/getProduct/', (req, res) => {
	//code
});

module.exports = Router;

// if server files is changed
// restart
