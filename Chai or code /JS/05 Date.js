// console.log(Date());
// console.log(new Date());
// console.log(Date.now());

const myDate = new Date();
console.log(myDate.toString());
console.log(myDate.getDate())
console.log(myDate.getDay())


console.log(myDate.toLocaleString('default', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata'
}));

