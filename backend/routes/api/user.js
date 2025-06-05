const express = require('express');
const router = express.Router();// navigater?

router.get('/',(req,res) =>{
    console.log(req,body);  //post
    res.send('user router')
}
);

module.exports = router;