const express = require("express");
const HomeController = require("../../controllers/home.controller");
const api = express.Router();
const CommentController = require("../../controllers/comment.controller")

const commentController = new CommentController;

const homeController = new HomeController
api.get('/v1/news', homeController.getNews);
api.post('/v1/news', homeController.storeNews);
api.post('/v1/comments', commentController.storeComment);
api.get('/v1/news/:id', homeController.getNewsById);

module.exports = api;