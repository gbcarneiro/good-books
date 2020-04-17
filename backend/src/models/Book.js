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

	bookFile: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
},{
	toJSON: {
		virtual: true, 
	}
})

BookSchema.virtual('book_url').get(function() {
  return `http://localhost:3333/files/${this.bookFile}`
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book