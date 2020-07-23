const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

//Users 


router.get('/profile/:id', (req, res, next) => {

    User
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/editProfile/:id', (req, res, next) => {

    User
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put("/editProfile/:id", ensureLoggedIn(), (req, res, next) => {
    const {
        name,
        username,
        password,
        email,
        avatar,
        location,
        contact,
    } = req.body
    User
        .findByIdAndUpdate(req.params.id, {
            name,
            username,
            password,
            email,
            avatar,
            location,
            contact,
        }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// router.delete('/profile/:id', ensureLoggedIn(), (req, res) => {
//     const role = req.user.role
//     if (role === "ADMIN") {
//         User
//             .findByIdAndDelete(req.params.id)
//             .then(response => res.status(200).json(response))
//             .catch(err => next(err))
//     }
// })


module.exports = router