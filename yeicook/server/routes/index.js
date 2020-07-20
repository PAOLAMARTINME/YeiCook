module.exports = app => {

    // Base URLS
    app.use('/api/chefs', require('./chefs.routes'))
    app.use('/api', require('./auth.routes'))
}