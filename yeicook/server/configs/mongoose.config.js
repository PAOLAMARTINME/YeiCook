const mongoose = require('mongoose')


mongoose
    .connect(`mongodb+srv://paolamartinme:paolame_7@cluster0.9blyl.mongodb.net/YeiCook?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    // .connect(`mongodb://localhost/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

module.exports = mongoose