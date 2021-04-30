const express = require('express');
const router = express.Router();
const utils = require('../utils')

generateWords = (words) => {
    let newWords = [];
    for (let i = 0; i < 12; i++){
        newWords[i] = Math.floor.random(1000)
    }
    return newWords;
}

router.get('/', (req, res) => {
    utils.getWords()
    .then((words) => {
        res.json(generateWords(words))
    })
    .catch((error) => {
        res.send(error.message);
    })
})

module.exports = router;