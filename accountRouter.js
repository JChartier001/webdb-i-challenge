const express = require('express');

const knex = require('./data/dbConfig.js');
const router = express.Router();
router.use(express.json());


router.get('/', (req, res) =>{
    knex.select('*').from('accounts').then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({message: "error getting accounts."})
    })
})

router.get('/:id', (req, res)=> {
    knex.select('*').from('accounts').where('id', '=', req.params.id)
    .then(account => {
        res.status(200).json(account);
    })
    .catch(error => {
        res.status(500).json({message: "errror retrieving account"})
    })
})

router.post('/', (req, res)=> {
    knex.insert(req.body, 'id').into('accounts')
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => {
        res.status(500).json({message: "errror posting account"})
    })
})

router.put('/:id', (req, res) => {
    const changes = req.body;

    knex('accounts').where({id: req.params.id}).update(changes)
    .then(count => {
        res.status(200).json(count);
    })
    .catch(error => {
        res.status(500).json({message: "error updating account"})
    })
})

router.delete('/:id', (req, res) => {
    

    knex('accounts').where({id: req.params.id}).del()
    .then(count => {
        res.status(200).json(count);
    })
    .catch(error => {
        res.status(500).json({message: "error deleting account"})
    })
})


module.exports = router;