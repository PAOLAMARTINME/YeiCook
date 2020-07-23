const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
    },
    avatar: {
        type: String,
        default: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    location: {
        type: String
    },
    contact: {
        type: Number
    },
    role: {
        type: String,
        enum: ['ADMIN', 'CLIENT'],
        default: 'CLIENT'
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User