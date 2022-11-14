const { Post } = require('../models');

const postData = 
    [
        {
            "title": "The use of the windows key",
            "content": "You WON'T believe this, but the windows key pulls up your search bar!  How crazy is that?!",
            "userID" : "1"
        },
        {
            "title": "I LOVE the new Apple Macbook",
            "content": "Yeah I'm mr techluver99, but the new Macbook is amazing.  It has all the best features that I'm known to love!",
            "userID": "2"
        },
        {
            "title": "I have given up on javascript",
            "content": "Javascript has driven me to insanity so I've decided to takeup cross-stitching.",
            "userID": "3"
        }
    ]

    const seedPost = () => Post.bulkCreate(postData);

    module.exports = seedPost;