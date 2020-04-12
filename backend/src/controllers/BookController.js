const express = require('express')
const Book = require('../models/Book')

module.exports = {
	async store(req, res) {
		try {
			const { name, authors, genres } = req.body
			const { filename } = req.body //book archive

			const book = await Book.create({
				name,
				authors, 
				genres: genres.split(',').map(genre => genre.trim()),
				book: filename, 
		})

		return res.json(book)

		} catch (err) {
			return res.status(400).send({ error: 'Send failed' })
		}
	}
}
 