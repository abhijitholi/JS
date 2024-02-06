var person_copy = {}
var person = {
    name:"Abhishek",
    age:"25",
    address:{ vill: "Jitholi", stret: "Garh road", dis: "Meerut", state: "Uttar Predesh"},
    phone:8057312177

}

Object.assign(person_copy,person)
person_copy.name = "kanika"
person_copy.age = "23"
person_copy.address.vill = "new village"


console.log(person_copy,person);

var person3 = JSON.stringify(person);
console.log(person3)

person3 = JSON.parse(person3)
person3.address.vill = "Alampur"
console.log(person3)


