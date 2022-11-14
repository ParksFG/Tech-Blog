const router = require('express').Router();
const { User } = require('../../models/');

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            userName: req.body.userName,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.userID = newUser.id;
            req.session.userName = newUser.userName;
            req.session.loggedIn = true;

            res.json(newUser);
        });
    } catch (err) {
        res.status(500).json(err.message);
    };
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                userName: req.body.userName,
            },
        });
        const validPW = user.checkPassword(req.body.password);
        if (!user || !validPW) {
            res.status(400).json({ message: 'Error logging in.' });
            return;
        };
        req.session.save(() => {
            req.session.userID = user.id;
            req.session.userName = user.userName;
            req.session.loggedIn = true;

            res.json({ user, message: 'Logged in!' });
        });
    } catch (err) {
        res.status(400).json({ message: 'Error logging in.' });
    };
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    };
});

module.exports = router;