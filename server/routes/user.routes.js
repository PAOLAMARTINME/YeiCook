const express = require('express')
const router = express.Router()

const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login")

const User = require('../models/user.model')

const uploader = require('../configs/cloudinary.config');

// Endpoints

router.get('/getOneProfile/:id', (req, res, next) => {

    User
        .findById(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch(err => next(err))
})


router.patch("/getOneProfile/:id", ensureLoggedIn(), uploader.single("avatar"), (req, res, next) => {
    const {
        name,
        username,
        email,
        location,
        contact,
        favourites
    } = req.body
    const tempAvatar = req.file ? req.file.url : req.user.avatar
    User
        .findByIdAndUpdate(req.params.id, {
            name,
            username,
            email,
            avatar: tempAvatar,
            location,
            contact,
            favourites
        }, { new: true })
        .then((data) => res.status(200).json(data))
        .catch(err => next(err))
})

module.exports = router






























// const express = require("express")
// const router = express.Router()
// const passport = require("passport")

// const User = require("../models/user.model")
// const bcrypt = require("bcrypt")
// const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

// //Users 


// router.get('/profile', ensureLoggedIn(), (req, res, next) => {

//     User
//         .find()
//         .then(response => res.json(response))
//         .catch(err => next(err))
// })

// router.get('/editProfile/:id', ensureLoggedIn(), (req, res, next) => {

//     User
//         .findById(req.params.id)
//         .then(response => res.status(200).json(response))
//         .catch(err => res.status(404).json({ message: 'No user BBDD' }, err))
// })

// router.put("/editProfile/:id", ensureLoggedIn(), (req, res, next) => {
//     const {
//         name,
//         username,
//         password,
//         email,
//         avatar,
//         location,
//         contact,
//     } = req.body
//     User
//         .findByIdAndUpdate(req.params.id, {
//             name,
//             username,
//             password,
//             email,
//             avatar,
//             location,
//             contact,
//         }, { new: true })
//         .then(response => res.status(200).json(response))
//         .catch(err => res.status(500).json({ message: 'Could not update user' }, err))
// })

// // router.delete('/profile/:id', ensureLoggedIn(), (req, res) => {
// //     const role = req.user.role
// //     if (role === "ADMIN") {
// //         User
// //             .findByIdAndDelete(req.params.id)
// //             .then(response => res.status(200).json(response))
// //             .catch(err => next(err))
// //     }
// // })


// module.exports = router