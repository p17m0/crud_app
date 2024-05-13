const express = require("express");
const { Post } = require("../../db/models");



const postRouter = express.Router();

postRouter.route('/')
.get(async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
})
.post(async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
});


postRouter
.route("/:postId")
.delete(async (req, res) => {
  const post = await Post.findByPk(req.params.postId);
  await post.destroy();
  res.sendStatus(204);
})
.get(async (req, res) => {
  const post = await Post.findByPk(req.params.postId);
  res.json(post);
})
.put(async (req, res) => {
  const post = await Post.findByPk(req.params.postId);
  await post.update(req.body);
  res.sendStatus(200);
})


module.exports = postRouter;
