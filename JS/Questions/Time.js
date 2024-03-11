// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today = new Date();

var day = today.getDay();

var dayList = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is: " + dayList [day])

var hours = today.getHours();
var min = today.getMinutes();
var second = today.getSeconds();

var prepand = (hours>=12 ? "PM" :"AM")


hours = (hours>=12 ? hours -12 : hours )
console.log("Current time is : " +  hours +" "+prepand+" : "+min+" : "+second)

// Check for special cases when hour is 0
// if (hour === 0 && prepand === ' PM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Noon';
//     } else {
//         hour = 12;
//         prepand = ' PM';
//     }
// }

// // Check for special cases when hour is 0
// if (hour === 0 && prepand === ' AM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Midnight';
//     } else {
//         hour = 12;
//         prepand = ' AM';
//     }
// }