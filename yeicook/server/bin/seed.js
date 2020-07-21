// Database
const mongoose = require('mongoose')
const dbName = 'YeiCook'
// mongoose.connect(process.env.DB_REMOTE)
// mongoose.connect(`${process.env.DB_REMOTE}`,{ useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(`mongodb+srv://paolamartinme:paolame_7@cluster0.9blyl.mongodb.net/${dbName}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

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
    avatar: 'https://lh3.googleusercontent.com/-lFxFUuYhtA8nW0AnpByRIw4UDbVfapvN0pmF6ePLK3ewVm9k9qjhimhI4-AxYlZvSskmlHtG7O7bxYme7iV-I8uDaVhW-6CZHT91UjY08m94AwE5SIgP9ye9JTcabFKCktmXRpEfwomdls0xef96RP2xcpjljFFZ2luvZ0QvuHV5TqxP5y6BD2Iq_rHEwCwj5mIl6fMc_f6sKNICfqEiRj1cwsS_HMpMg42dxNYeJrAbNh10sBEh88_rlgtbyvcQ441L3JkY2o7WlOlwH3IwvZAcat-UR0b1_AcI3fk388W5E2pYp7vOuvU3NhiR5_ZkyR4yeL2PkuYOsuslj0i2FW304NCVmddHU_g6yowrlpG_qiC0-bUrISXRohgZE0cuPlopGIsFaLAT7X6jAwgPJJsXlhFNQHUSiEAfCUDXePQlctgwmgVJYWsvc-5NuFKLa8X2lyk49qtCK08Qg1FZniaa1IjE7uvgvwH-qcHcT_dVOt94JPaeyUfRrYom01QZpNXMAkVRj9O5193X6tP3qGoJI6eGyf_e9Bl0nK9c6e9GNPcjm17oUhhh36XV2MNcnOpAoEaTZwnbOCcfSC1YthVFW5rJ3Oqbx1WaAINxw2rsDoWrMGYGwyqcuXnbMhnocCh_YvSTFYCsbImyk6yLb_H8GPhKFujYRUBXEBzdJLVv3f1_Np72HIW2jOh1ok=w1100-h1466-no?authuser=0',
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