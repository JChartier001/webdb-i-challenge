const express = require('express');

const knex = require('./data/dbConfig.js');
const router = express.Router();

router.get('/', (req, res) =>{
    knex.select('*').from('accounts').then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({message: "error getting accounts."})
    })
})