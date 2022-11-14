const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    try {
        const newPost = await Post.create({
            ...body,
            userID: req.session.userID
        });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).end();
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
