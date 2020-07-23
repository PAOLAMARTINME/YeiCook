module.exports = app => {

    // Base URLS
    app.use('/api/chefs', require('./chefs.routes'))
    app.use('/api/user', require('./user.routes'))
    app.use('/api', require('./auth.routes'))

    // // CLOUDINARYCONFIG 
    // app.use('/api/files', require('./files.routes'))
}