var recipes = require('../recipes.json');
var router = require('express').Router();
const middleware = require('../middleware');

router.get('/',middleware ,(req, res) => {
   
    let results = [];
    if (context.searchTerm) {
        results = recipes.filter(({name}) => name.match(context.search))
    } else {
        results = recipes
    }
    results = results.slice(context.skip, (context.skip + context.limit))
    // console.log(results);
    res.json({
        page: context.page,
        limit: context.limit,
        skip: context.skip,
        search: context.searchTerm,
        data: results
    });
});


module.exports = router;

