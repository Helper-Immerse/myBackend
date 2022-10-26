const express = require('express');
const router = express.Router();


// =================Assignment========================
const bookingData = require("../controllers/book1controler");
router.post("/createBookData", bookingData.createBooksData);
router.post("/createAuthorData", bookingData.createAuthorsData);
router.get("/getAllData", bookingData.getAllData);
router.get("/getResult", bookingData.getResult);
router.get("/findBook", bookingData.findBook);

// ========================================================
// const bookmodel1
// const bookmodel = require("../models/bookModel")
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;