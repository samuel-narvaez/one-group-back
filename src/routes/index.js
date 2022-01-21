const loginRoutes = require('./auth/loginRoutes')
const userRoutes = require('./user/userRoutes')
const productsRoutes = require('./products/productsRoutes')
const mediaRoutes = require('./products/mediaRoutes')
const raitingRoutes = require('./products/raitingRoutes')

module.exports = app => {
    app.use('/sign', loginRoutes)
    app.use('/users', userRoutes)
    app.use('/products', productsRoutes)
    app.use('/media', mediaRoutes)
    app.use('/rate', raitingRoutes)
}