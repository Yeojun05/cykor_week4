const express = require('express');
const router = express.Router();// navigater?

router.get('/',(req,res) =>res.send('posts router'));

module.exports = router;