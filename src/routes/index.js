const aboutRouter = require('./about')
const homeRouter = require('./home')
const eventsRouter = require('./events')
const menuRouter = require('./menu')
const reviewRouter = require('./review')
const loginRouter = require('./login')

function route(app) {
    app.use('/', homeRouter)
    app.use('/home', homeRouter)
    app.use('/about', aboutRouter)    
    app.use('/events', eventsRouter)
    app.use('/menu', menuRouter)
    app.use('/review', reviewRouter)
    app.use('/login', loginRouter)
}

module.exports = route;