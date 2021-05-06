const userData = require('./user.json');
// console.log(userData);

userData.forEach((user) => {
	if (user.id === 1) {
		console.log(user);
	}
});
