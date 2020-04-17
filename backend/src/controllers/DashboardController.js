const Book = require('../models/Book')

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers 
        const books = await Book.find({ user: user_id })
        return res.json(books)
    }
}