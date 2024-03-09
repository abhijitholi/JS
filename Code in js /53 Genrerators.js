console.log("Start");

function* genFX(){
    yield 1;
    yield 2;
    return 3;
}
const gen = genFX();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())




function* genFX1(){
    const result = yield 1;
    yield 2;
    return result;
}
const gen1 = genFX1();

console.log(gen1.next())
console.log(gen1.next(5))
console.log(gen1.next())
console.log(gen1.next())