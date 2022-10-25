
const BooksModel = require("../models/Books")
const createBooks = async function (req, res) {
    let data = req.body
    let saveData = await BooksModel.create(data)
    res.send({msg: saveData}) 
}

const getBooksData = async function (req, res) {
    let allBooks = await BooksModel.find()
    res.send({msg: allBooks})
}

module.exports.createBooks = createBooks
module.exports.getBooksData = getBooksData