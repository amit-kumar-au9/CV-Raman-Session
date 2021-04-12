const express = require('express');
const server = express();

// server -> request -> response
// request -> get,post,delete,patch,put, etc

const port = 6700;

server.get('/', function (req, res) {
	console.log(req);
	let data = '';
	for (i = 0; i < 10; i++) {
		data += 'hello its working \n';
	}
	res.status(500).send('Error in database');
});

server.get('/heathCheck', function (req, res) {
	res.send('Its ok');
});

server.post('/register', function (req, res) {
	console.log(req.body);
	res.send('recieved');
});

// 404 -> internte is not
// 400 -> data not found

// not found -> 4 _ _
// 404 ->
// 400 -> data is not
// server.post();
// server.delete();

server.listen(port, function (err) {
	if (err) throw err;
	console.log(`Server is running on port ${port}`);
});

// nodemon -> clrt+s -> restart the script scf
