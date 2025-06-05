const express = require('express');
const router = express.Router();// navigater?

router.get('/',(req,res) =>res.send('auth router'));

module.exports = router;