const express = require('express')
const upload = require('express-fileupload')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(upload())
app.use(cors())
app.use(routes)

mongoose.connect('mongodb+srv://developer:*********@cluster0-yplgd.mongodb.net/test?retryWrites=true&w=majority', 
{
	useNewUrlParser: true,
	useUnifiedTopology: true, 
})


app.listen(3333)