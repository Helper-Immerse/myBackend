const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const NewbookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "NewAuthor"
    }, 
    price: Number,
    ratings: Number
}, { timestamps: true });


module.exports = mongoose.model('NewBookLibrary', NewbookSchema)
