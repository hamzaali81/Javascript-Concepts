var recipes = require('../recipes.json');
var router = require('express').Router();

// console.log('****', recipes);

router.get('/', (req, res)=> {
    
    if(!req.query.page && !req.query.limit) {
        result = recipes.slice(0, 3);

    res.status(200).json(
        result
    )
    } else {

        const page = req.query.page || 1;
        const limit = req.query.limit || 3;
        // const skip = (page - 1) * limit; 
        
        const startLimit = (page - 1) * limit;
        const endLimit = page * limit;
        
        result = recipes.slice(startLimit, endLimit);
        
        res.status(200).json(
            result
        )
    }
})

module.exports = router;

