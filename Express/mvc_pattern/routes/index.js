// Main router
const MainRouter = require('express').Router();

const userRouter = require('./user');
const productRouter = require('./product');

MainRouter.use('/user', userRouter);
MainRouter.use('/prouct', productRouter);

module.exports = MainRouter;
