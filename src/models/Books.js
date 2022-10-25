const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema( {
    BooksName: String,
    AuthorName: String,
    Category: {
        type: String,
        enum: ["Adventure stories", "Classics", "Crime","Fantasy","Historical fiction","Horror","Humour and satire"]
    },
    Year: Number
}, { timestamps: true });

module.exports = mongoose.model('Book', BooksSchema)  // b --> B // Books