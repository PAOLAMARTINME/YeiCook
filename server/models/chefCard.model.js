const mongoose = require("mongoose")

const ChefSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    avatar: {
        type: String,
        default: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    email: {
        type: String,
    },
    type: {
        type: String,
        enum: ['cocktail/catering', 'desayunos', 'comidas', 'cenas']
    },
    specialty: {
        type: String,
        enum: ['vegana', 'vegetariana', 'sin gluten', 'saludable','diabetes', 'mediterranea']
    },
    location: {
        type: String
    },
    contact: {
        type: Number
    },
    certificate: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String
    }
}, {
    timestamps: true
})


//Likes

ChefSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'Chef',
    justOne: false
});

const Chef = mongoose.model("Chef", ChefSchema)

module.exports = Chef
