const { User } = require('../models');

const userData = 
    [
        {
            "userName": "Coding Professor",
            "password": "password"
        },
        {
            "userName": "TechLuver99",
            "password": "password99"
        },
        {
            "userName": "JavaScript Genius",
            "password": "Javaguy"
        }
    ];

const seedUser = () => User.bulkCreate(userData,
    {
        individualHooks: true,
        returning: true,
    });
    
module.exports = seedUser;