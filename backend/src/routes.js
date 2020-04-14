const express = require('express')
const upload = require('express-fileupload')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const UserController = require('./controllers/UserController')
const BookController = require('./controllers/BookController')

const routes = express.Router() 
//const upload = multer(uploadConfig)


routes.post('/register', UserController.store)
routes.post('/send/book', BookController.store)

module.exports = routes