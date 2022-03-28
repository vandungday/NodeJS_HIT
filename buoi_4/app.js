const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require('./routes/index');
const db = require('./config/db.js');
require('dotenv').config();
app.use(express.json());

db();
router(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
