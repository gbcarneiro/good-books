const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)

mongoose.connect('mongodb+srv://developer:goodbooks@cluster0-yplgd.mongodb.net/test?retryWrites=true&w=majority', 
{
	useNewUrlParser: true,
	useUnifiedTopology: true, 
})


app.listen(3333)