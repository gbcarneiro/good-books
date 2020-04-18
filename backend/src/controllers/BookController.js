const User = require('../models/User')
const Book = require('../models/Book')

module.exports = {
	async index(req, res) {
		const { genre } = req.query
		const books = await Book.find({ genres: genre})

		return res.json(books)
	},

	async store(req, res) {
		const { filename } = req.file
		const { name, authors, genres } = req.body

		const { user_id } = req.headers 

		const user = await User.findById(user_id)

		if(!user) {
			res.status(401).send({ error: 'The user does not exists' })
		}

		const book = await Book.create({
			user: user_id,
			name,
			authors,
			genres: genres.split(',').map(genre => genre.trim()) ,
			bookfile: filename
		})

		res.json(book)
	},

	async delete(req, res) {
		const { _id } = req.params 

		Book.findOneAndDelete({ _id }, function(err) {
			if(err) {
				res.json({ error: 'error'})
			} else {
				res.json({ msg: 'deleted' })
				console.log('deleted!')
			}
		}) 
	},
}
