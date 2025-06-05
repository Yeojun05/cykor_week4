const express = require('express');
const router = express.Router();// navigater?

const { check, validationResult } = require('express-validator'); 

router.post('/',
[
    check('name','Name is required').not().isEmpty(),
    check('password','more than 8').isLength({
        min : 8
    }),
],
async(req,res) =>{ 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        })
    }
    console.log(req.body);  //post
    res.send('user router');
}
);

module.exports = router;