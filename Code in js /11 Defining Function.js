// Regular Function
console.log(sum(1,2,3)); 
// Regular function has provided flexibility This works even before the declaration.
function sum (a,b,c){
    return a+b+c;
}

// Function Expression
var sum2 = function(a,b,c){
    return a+b+c;
}
console.log(sum2(1,2,3));

// Arrow Function 
var sum3 = (a,b,c) =>{
    return a+b+c;
}
console.log(sum3(1,2,3));


