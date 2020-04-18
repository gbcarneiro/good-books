const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use ('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

mongoose.connect('mongodb+srv://developer:*********@cluster0-yplgd.mongodb.net/test?retryWrites=true&w=majority', 
{
	useNewUrlParser: true,
	useUnifiedTopology: true, 
})


app.listen(3333)
