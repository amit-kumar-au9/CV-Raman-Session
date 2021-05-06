const Router = require('express').Router();

const { addUser, updateUser } = require('../controller/userController');

Router.post('/addUser', addUser);
Router.post('/updateUser', updateUser);

module.exports = Router;
