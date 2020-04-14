const upload = require('express-fileupload')
const path = require('path')
const Book = require('../models/Book')

module.exports = {
	async store(req, res) {
			const { name, authors, genres } = req.body

			const file = req.files.bookFile
			const bookFile = file.name

			file.mv(path.resolve(path.resolve(`books/${req.files.bookFile.name}`)),  err => {
				if(err) {
					console.log(err)
				} else {
					console.log('done!')
				}
			})

			const book = await Book.create({
				name, 
				authors,
				genres,
				bookFile
			})

			res.send({ book })
	}
}