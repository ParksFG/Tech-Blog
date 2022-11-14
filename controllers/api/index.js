const router = require('express').Router();
const commentRoutes = require('./comment-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');

router.use('/comment', commentRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;