var fs = require("fs");

var contents = fs.readFileSync(process.argv[2]);
var arrayOfStrings = contents.toString().split("\n");
console.log(arrayOfStrings.length-1);
