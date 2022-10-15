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


const array4 = [3,5,7,9,11,13,15,17,19,21];


function myUnion () {
    let A = [34, 35, 45, 48, 49];
let B = [48, 55];
let C = [34,67,23,55];
let D = [22,37,89,49];
let E = [22,67,45,34,29];
let unions = [...new Set([...A, ...B,...C,...D,...E])];
let S = 0;
if(console.log(unions)==undefined) {
    S = 1;
} else {
    console.log(unions);
}
}

x = [[1,2],[3,4],[5,6]];
o = x.reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{});

module.exports.PresentDate = date
module.exports.Monthme = currentMonth
module.exports.BranchDe = BranchInfo
module.exports.NameMy = myName
module.exports.OddNumbers = array4
module.exports.fiveArray = myUnion
module.exports.Objects = o;