const express = require('express');
const router = express.Router();
const utils = require('../utils');

router.get('/', (req, res) => {
    utils.getWords()
    .then((word) => res.json(word))
    .catch((error) => {
        res.send(error.message);
    })
})

module.exports = router;