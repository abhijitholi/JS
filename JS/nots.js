var a = 10;
let b = 20;
const c = 30;

// Arithmatic Opretors
console.log('Arithmatic Opretors');
console.log('a + b = ' + (a + b));
console.log('a - b = ' + (a - b));
console.log('a * b = ' + a * b);
console.log('a / b = ' + a / b);
console.log('a % b = ' + (a % b));
++a;
// a = aa
console.log('++a = ' + a);
--b;
console.log('--b = ' + b);

// Seme 30 * 30
console.log(Math.pow(c, 2));
console.log(c ** 2);

// asiginment Opretors
console.log('Asiginment Opretors');
console.log('a = ' + a);
console.log((a += 2));
console.log((a -= 2));
console.log((a *= 2));
console.log((a /= 2));
console.log((a **= 2));

console.log((a %= 50));

console.log('Shift Assignment Operators');
console.log('a = ' + a);
console.log((a >>= 21));
console.log((a <<= 21));
console.log((a >>>= 21));

// Logical opretors
console.log('Logical opretors');
console.log('&&');
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log('||');
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log('??');
console.log(true ?? true);
console.log(false ?? true);
console.log(true ?? false);
console.log(false ?? false);

// Arrays
console.log('Arrays');
const cars = ['Shift', 'Varna', 'Szuki', 'Big Dady'];

console.log(cars[2]);
console.log(' ');

// Object
console.log('Object');
const Students = { Name: 'Abhi', Class: '10', 'Roll Number': 15 };
console.log(Students.Name);
console.log(' ');

// function
console.log('Function');

function abc(a, b) {
  return a * b;
}

console.log(abc(5, 10));

const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person.firstName + ' ' + person.lastName);

// Events
console.log(' ');
console.log('Events');

// Event	            Description
// onchange	          An HTML element has been changed
// onclick	          The user clicks an HTML element
// onmouseover	      The user moves the mouse over an HTML element
// onmouseout	        The user moves the mouse away from an HTML element
// onkeydown	        The user pushes a keyboard key
// onload	            The browser has finished loading the page

// String

console.log('String');
console.log(' ');
let text = 'We are the so-called "Vikings" from the north.';
let text1 = "It's alright.";
let text2 = 'The character \\ is called backslash.';
console.log(text);
console.log(text1);
console.log(text2);




