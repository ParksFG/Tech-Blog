const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'userID'
});

User.hasMany(Comment, {
    foreignKey: "userID"
});

Post.hasMany(Comment, {
    foreignKey: 'userID'
});

Post.belongsTo(User, {
    foreignKey: 'userID'
});

Comment.belongsTo(User, {
    foreignKey: 'userID'
});

Comment.belongsTo(Post, {
    foreignKey: 'userID'
});

module.exports = {User, Post, Comment}