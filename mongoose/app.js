const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const mainRouter = require('./routes/index');
const mongo_uri = 'your mongo url';
app.use('/', mainRouter);

mongoose
	.connect(mongo_uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));

app.listen(3000, (err) => {
	if (err) throw err;
	console.log('Server up at 3000');
});
