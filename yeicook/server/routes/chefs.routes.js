const express = require('express')
const router = express.Router()

const { ensureLoggedIn, ensureLoggedOut} = require("connect-ensure-login")

const Chef = require('../models/chefCard.model')
const User = require('../models/user.model')

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


router.put("/getOneChef/:chef_id", ensureLoggedIn(), (req, res, next) => {
    const role = req.user.role
    if (role === "ADMIN") {
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
    }
})

router.post('/newChef', ensureLoggedIn(), (req, res, next) => {
    console.log('HOLA ADMIN', req.user.role)
    const role = req.user.role
    if (role === "ADMIN") {
        Chef
            .create(req.body)
            .then(response => res.json(response))
            .catch(err => next(err))
    }
})

    router.delete("/chefs/:id", ensureLoggedIn(), (req, res) => {
        const role = req.user.role
        if (role === "ADMIN") {
            Chef
                .findByIdAndDelete(req.params.id)
                .then(response => res.status(200).json(response))
                .catch(err => next(err))
        }
    })



module.exports = router
