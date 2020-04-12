const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
	name: {
		type: String, 
		require: true,
	},

	authors: {
		type: [String],
		require: true,
	},

	genres: {
		type: [String],
		require: true,
	}, 

	book: String,
},{
	toJSON: {
		virtual: true, 
	}
})

BookSchema.virtual('book_url').get(function() {
  return `http://localhost:3333/files/${this.book}`
})

const Book = mongoose.model('Book', BookSchema)