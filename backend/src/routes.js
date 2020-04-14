const express = require('express')
const upload = require('express-fileupload')

const UserController = require('./controllers/UserController')
const BookController = require('./controllers/BookController')
const DashboardController = require('./controllers/DashboardController')

const routes = express.Router() 


routes.post('/register', UserController.store)
routes.post('/logon', UserController.auth)

routes.get('/book', BookController.index)
routes.get('/download/:_id', BookController.download)
routes.post('/book', BookController.store)
routes.delete('/book/:_id', BookController.delete)

routes.get('/dashboard', DashboardController.show)
module.exports = routes