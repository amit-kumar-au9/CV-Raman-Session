const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const getPostDetailByID = 'https://jsonplaceholder.typicode.com/posts/';
const getCommentByPostId =
	'https://jsonplaceholder.typicode.com/comments?postId=';

app.get('/post/:postId', async (req, res) => {
	const { postId } = req.params;
	const postDetail = await axios.get(`${getPostDetailByID}${postId}`);
	const commentDetail = await axios.get(`${getCommentByPostId}${postId}`);
	const data = { post: postDetail.data, comment: commentDetail.data };
	res.json(data);
});

app.listen(3000, () => {
	console.log('Running on 3000');
});
