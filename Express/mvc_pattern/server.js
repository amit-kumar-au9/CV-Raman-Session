const express = require('express');
const server = express();
const port = 5000;

server.use(express.json());
const MainRouter = require('./routes/index');

server.use('/api', MainRouter);

server.listen(port, (err) => {
	if (err) throw err;
	console.log('Server running at port ', port);
});
