const person1 ={
    name:'Abhishek',
    age:'25',
    getName: function(){
        return this.name 
    }
}

console.log(person1)

// call
const person2 ={
    name:"P1",
    getName:function(){
        return this.name
    }
}

const p2 = {name:"P2"}

console.log(person2.getName.call(p2))