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


array4 = [3,5,7,9,11,13,15,17,19,21]
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

module.exports.PresentDate = date
module.exports.Monthme = currentMonth
module.exports.BranchDe = BranchInfo
module.exports.NameMy = myName
module.exports.OddNumbers = tail