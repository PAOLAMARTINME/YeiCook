// Database
const mongoose = require('mongoose')
const dbName = 'YeiCook'
// mongoose.connect(process.env.DB_LOCAL)
mongoose.connect(`${process.env.DB_REMOTE}`, { useNewUrlParser: true, useUnifiedTopology: true })


// Model
const ChefCard = require('../models/chefCard.model')
const User = require('../models/user.model')


// Data

const chefs = [{
    name: 'Jose Martinez',
    avatar: 'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    email: 'paolamartinme@gmail.com',
    type: 'cocktail/catering',
    specialty: 'vegana',
    location: 'Sol, Madrid-España',
    contact: 605443215,
    certificate: true,
    title: true,
    img: 'https://images.unsplash.com/photo-1581015663190-ed4354492619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
},
{
    name: 'Nelson Garcia',
    avatar: 'https://images.unsplash.com/photo-1558227901-87eb8922813f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    email: 'paolamartinme@gmail.com',
    type: 'desayunos',
    specialty: 'vegetariana',
    location: 'Sol, Madrid-España',
    contact: 605443215,
    certificate: true,
    title: true,
    img: 'https://images.unsplash.com/photo-1562166453-964fd947f2a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
},
{
    name: 'Jessica Espinoza',
    avatar: 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    email: 'paolamartinme@gmail.com',
    type: 'cocktail/catering',
    specialty: 'sin gluten',
    location: 'Sol, Madrid-España',
    contact: 605443215,
    certificate: true,
    title: true,
    img: 'https://images.unsplash.com/photo-1543826173-70651703c5a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1099&q=80'
},
{
    name: 'Ely Rebolledo',
    avatar: 'https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    email: 'paolamartinme@gmail.com',
    type: 'cenas',
    specialty: 'saludable',
    location: 'Sol, Madrid-España',
    contact: 605443215,
    certificate: true,
    title: true,
    img: 'https://images.unsplash.com/photo-1544510806-e28d3cd4d4e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
},
{
    name: 'Nidian Martin',
    avatar: 'https://images.unsplash.com/photo-1589654312430-20441681ac7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    email: 'paolamartinme@gmail.com',
    type: 'comidas',
    specialty: 'mediterranea',
    location: 'Sol, Madrid-España',
    contact: 605443215,
    certificate: true,
    title: true,
    img: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
},

]

// Seed
ChefCard.create(chefs)
    .then(allTheChefs => {
        console.log(`Created ${allTheChefs.length} chefs`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the products', err))