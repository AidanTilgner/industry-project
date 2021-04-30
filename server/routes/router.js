const express = require('express');
const router = express.Router();
const utils = require('../utils')

generateWords = () => {
    
}

router.get('/', (req, res) => {
    res.status(200).send('working');
    res.json(generateWords())
})

module.exports = router;