const upload = require('express-fileupload')
const path = require('path')
const http = require('http')

const Book = require('../models/Book')
const User = require('../models/User')

module.exports = {
	async index(req, res) {
		const { genre } = req.query
		const books = await Book.find({ genres: genre})

		return res.json(books)
	},

	async store(req, res) {
		const { name, authors, genres } = req.body

		const file = req.files.bookFile
		const bookFile = file.name

		const {user_id} = req.headers

		const user = await User.findById(user_id)

		if(!user) {
			res.status(401).send({ error: 'The user does not exists' })
		}

		file.mv(path.resolve(path.resolve(`books/${req.files.bookFile.name}`)),  err => {
			if(err) {
				console.log(err)
			} else {
				console.log('done!')
			}
		})

		const book = await Book.create({
			user: user_id,
			name, 
			authors: authors.split(',').map(author => author.trim()),
			genres: genres.split(',').map(genre => genre.trim()),
			bookFile
		})

		res.json({ book })
	},

	async delete(req, res) {
		const { _id } = req.params 

		Book.findByIdAndRemove({ _id }, function(err) {
			if(err) {
				res.json({ error: 'fila da puta'})
			} else {
				res.json({ msg: 'deu certor' })
				console.log('deleted!')
			}
		})
	},

	async download(req, res) {
		const { _id } = req.params 
		const bk = await Book.findById( _id )

		if(!bk) {
			res.send({ err: 'fila da puta' })
		} else {
			res.send({ msg: 'downloaded!' })
		}
		
	}
}