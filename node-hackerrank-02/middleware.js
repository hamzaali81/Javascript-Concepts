var recipes = require('./recipes.json');

module.exports = (req, res, next) => {
    const { page, q, limit, skip } = req.query; 
    console.log(req.query = page);
    req.query = recipes;
        next()
        };

