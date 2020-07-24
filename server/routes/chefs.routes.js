const express = require('express')
const router = express.Router()

const { ensureLoggedIn, ensureLoggedOut} = require("connect-ensure-login")

const Chef = require('../models/chefCard.model')
const User = require('../models/user.model')

// Role checker middleware
const checkRole = rolesToCheck => (req, res, next) => rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')

// Endpoints
router.get('/getAllChefs', (req, res, next) => {

    Chef
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.get('/getOneChef/:id', (req, res, next) => {

    Chef
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.put("/getOneChef/:id", checkRole(['ADMIN']),ensureLoggedIn(), (req, res, next) => {
        const {
            name,
            avatar,
            email,
            type,
            specialty,
            location,
            contact,
            certificate,
            title,
            img
        } = req.body

        Chef
            .findByIdAndUpdate(req.params.id, {
                name,
                avatar,
                email,
                type,
                specialty,
                location,
                contact,
                certificate,
                title,
                img
            }, { new: true })
            .then(response => res.json(response))
            .catch(err => next(err))
})


//NO EDITA

router.post('/newChef', checkRole(['ADMIN']),ensureLoggedIn(), (req, res, next) => {

        Chef
            .create(req.body)
            .then(response => res.json(response))
            .catch(err => next(err))

})

router.delete('/chef/:id', checkRole(['ADMIN']),ensureLoggedIn(), (req, res) => {

            Chef
                .findByIdAndDelete(req.params.id)
                .then(response => res.status(200).json(response))
                .catch(err => next(err))
        
    })



module.exports = router
