module.exports = app => {

    // Base URLS
    app.use('/chefs', require('./chefs.routes.js'))
    // app.use('/api', require('./auth.routes'))
}