const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: String, 
    authors: String, 
    genres: [String], 
    bookfile: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    },
})

BookSchema.virtual('bookfile_url').get(function() {
    return `http://localhost:3333/files/${this.bookfile}`
})

module.exports = mongoose.model('Book', BookSchema)