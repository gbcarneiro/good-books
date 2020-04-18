const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const UserController = require('./controllers/UserController')
const BookController = require('./controllers/BookController')
const DashboardController = require('./controllers/DashboardController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/register', UserController.store)
routes.post('/logon', UserController.auth)

routes.get('/book', BookController.index)
routes.post('/book', upload.single('bookfile'), BookController.store)
routes.delete('/book/:_id', BookController.delete)

routes.get('/dashboard', DashboardController.show)
module.exports = routes
