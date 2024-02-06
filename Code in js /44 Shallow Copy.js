var person_copy = {}
var person = {
    name:"Abhishek",
    age:"25",
    address:"Jitholi, Garh road, Meerut, Uttar Predesh",
    phone:8057312177

}

Object.assign(person_copy,person)
person_copy.name = "kanika"
person_copy.age = "23"
person_copy.phone = "1234567890"


console.log(person_copy,person);

