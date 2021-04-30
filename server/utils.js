const fs = require('fs/promises');

module.exports = { 
    getWords() { 
        return fs.readFile('./library.json', "utf8").then((content) => JSON.parse(content))
    }
}