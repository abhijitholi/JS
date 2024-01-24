const { connect } = require("http2");

var number = [1,2,3,4,5,6,7,8,9]
var text = ['Text is Added']
console.log(number);

number.reverse(); 
console.log(number)

var joi = number.join('-')
console.log(joi)

var Added = number.concat(text)
console.log(Added);