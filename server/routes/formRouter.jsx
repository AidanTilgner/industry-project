import { Router } from "express";
const app = express();

app.get('/', (req, res) => {
    res.status(200);
})