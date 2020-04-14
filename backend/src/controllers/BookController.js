const upload = require('express-fileupload')
const path = require('path')

const Book = require('../models/Book')
const User = require('../models/User')

module.exports = {
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

			res.send({ book })
	}
}