
setTimeout(function (){
    var a = 10;
    var b = 20;
    console.log(a+b)
},300)

var a = 0;
var id = setInterval(function (){
    a++
    console.log(a)
},1000)

console.log(id)

