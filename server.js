const express = require('express');
const accountRouter = require('./accountRouter.js')

const knex = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('/api/accounts', accountRouter);

server.get('/', (req, res) => {
    res.send('<h2>You have made it to my server<h2>')
})

module.exports = server;