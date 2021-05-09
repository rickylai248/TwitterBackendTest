const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('knex')

const cocktails = require('./controllers/cocktails')

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '{username}',
        password: '{password}',
        database: '{databasename}'
    }
});

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/cocktails', (req, res) => { cocktails.handleCocktails(req, res, db) })

app.listen(3000, () => {
    console.log('app is running on port 3000')
})