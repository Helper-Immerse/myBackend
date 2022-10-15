const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package
const underscore = require('underscore')
const lodash = require('lodash')
const helper = require('../Helper')
router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("Calling my function ",helper.NameMy())
    console.log("The value of the constant is ",xyz.myUrl)
    console.log("The value of the constant is ",helper.PresentDate);
    console.log("The value of the constant is ",helper.Monthme);
    console.log("The value of the constant is ",helper.BranchDe);
    console.log("The value of the constant is ",helper._.tail(array4));
    console.log("The value of the constant is ",helper.fiveArray());
    console.log("The value of the constant is ",helper.Objects);
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result) 
    function splitIntoChunk(arr, chunk) {

        for (i=0; i < arr.length; i += chunk) {
    
            let tempArray;
            tempArray = arr.slice(i, i + chunk);
            console.log(tempArray);
        }
    
    }
    const myMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const chunk = 4;
    let result2 = lodash.first(splitIntoChunk(myMonths, chunk));
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

