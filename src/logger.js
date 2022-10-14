const url = "https://www.google.com"

let WelcomeMessage = function() {
    console.log("Welcome to my application I am Abhishek and a part of FunctionUp Lithium Cohort")
    return "done"
}

let date = new Date();
const currentMonth = new Date().getMonth() +1
module.exports.myUrl = url
module.exports.myFunction = WelcomeMessage
module.exports.PresentDate = date
module.exports.Monthme = currentMonth

