const Book = require('../models/Book')

module.exports = {
	async show(req, res) {
		const { user_id } = req.query
		const books = await Book.find({ user: user_id })

		res.json(books)	
	}
}