const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const BooksModel= require("../models/Books.js")
const UserController= require("../controllers/userController")
const bookscontroler = require("../controllers/bookscontroler")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// Problem
router.get("/book", bookscontroler.getBooksData)

router.post("/booki", bookscontroler.createBooks) // handler

// Problem end
router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;