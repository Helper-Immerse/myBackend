const express = require('express');
const router = express.Router();




let myArray = ["Kantara","Ramayana","HankyPanky","Nayakan","JaiBhim"]

// ------------- Problem 1 Movies APi ------------ 
router.get('/Movies', function (req, res) {
    res.send(myArray)
})

// --------- Problem 2 Index number ---------
// router.get('/Movies/:indexNumber',(req,res)=>{
//     let index = req.params.indexNumber  
//     res.send(myArray[index])
// })

// -------- Problem 3 error --------
router.get('/Movies/:indexNumber', (req,res) => {
    let index = req.params.indexNumber
    if(index>myArray.length){
        res.send('Please use a valid index')
    }
    else{
        res.send(myArray[index])  
    }
})

// ---------Problem4 stead of an array of strings define an array of movie objects this time
let films = [ {
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
//    router.get('/films', (req, res) => {
//     res.send(films)
// })

// Problem 5
router.get('/films/:filmid',(req,res)=>{
    let filmid = req.params.filmid
    if (filmid>films.length){
        res.send('Please use a valid index')
    }
    else{
        res.send(films[filmid-1])
    }
})

// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;