const router = require('express').Router();
const { post } = require('../../../Project 2/Project2/controllers/home-routes');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{
                model: User,
                attributes: ['userName']
            }],
        });
        const posts = postData.map((post) => post.get({plain: true}));
        res.render('allPosts', {
            posts,
            loggedIn: req.session.loggedIn
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.get('/posts/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: {exclude: ['password']}
            },
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: {exclude: ['password']}
                }
            }],
        });
        const commentData = await Comment.findAll({
            where: {
                postID: req.params.id
            },
            include: [{
                model: User,
                attributes: {exclude: ['password']}
            }],
        });
        const comments = commentData.map((comment) => comment.get({plain: true}));
        const post = postData.get({plain: true});
        res.render('singlePost', {
            comments,
            post,
            loggedIn: req.session.loggedIn
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return
    }
    res.render('login');
});

module.exports = router;