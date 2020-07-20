const express = require('express')
const router = express.Router()

const Chef = require('../models/chefCard.model')
// Endpoints
router.get('/getAllChefs', (req, res, next) => {

    Chef
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.get('/getOneChef/:chef_id', (req, res, next) => {

    Chef
        .findById(req.params.chef_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post('/newChef', (req, res, next) => {

    Chef
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router
