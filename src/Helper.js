let date = new Date();
const currentMonth = new Date().getMonth() +1
let BranchInfo = {
    Batch: "Lithium",
    Week: "W3D5",
    Topic: "Nodejs module system"
}
let string = "Abhishek";
function myName () {
    let first = string.toLowerCase();
    let second = string.toUpperCase();
    console.log(first,second);
}

module.exports.PresentDate = date
module.exports.Monthme = currentMonth
module.exports.BranchDe = BranchInfo
module.exports.NameMy = myName