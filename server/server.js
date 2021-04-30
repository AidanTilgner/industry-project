const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/router')

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use('/words', router);

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})