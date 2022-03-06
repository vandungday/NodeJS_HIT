const express = require('express')
const { defaultConfiguration } = require('express/lib/application')
const { redirect } = require('express/lib/response')
const app = express()
const port = 3000

const routeUser = require('./routes/userRoutes');

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

app.use(express.json())

app.use('/', routeUser)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})