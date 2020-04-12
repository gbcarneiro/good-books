const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const UserController = require('./controllers/UserController')
const BookController = require('./controllers/BookController')

const routes = express.Router() 
const upload = multer(uploadConfig)


routes.post('/register', UserController.store)
routes.post('/send/book', upload.single('book'), BookController.store)

module.exports = routes