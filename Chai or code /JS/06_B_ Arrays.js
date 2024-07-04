
const marval_heros = ["thor", "hulk", "ironman", "spiderman"];
const dc = ["batman", "wonderwoman", "superman", "aquaman"];

//  marval_heros.push(dc);
//  console.log(marval_heros);

//  console.log(marval_heros.length);


// const newmarval_heros = marval_heros.concat(dc);
// console.log(newmarval_heros);


const newmarval_heros = [...marval_heros, ...dc];
//console.log(newmarval_heros);


const another_famely = [1,2,3,[4,5,6,[7,8,9]]];
const Real_another_famely = another_famely.flat(1);
//console.log(Real_another_famely);

console.log(Array.isArray("Abhishek"));
const Name = "Abhishek";

const splitArray = Name.split("");
console.log(splitArray);
//console.log(Array.from("Abhishek"));