console.log("start")

function init(){
    const pi = 5.13
    return function getAreaCircle(r){
        return pi*r*r
    }
}

const getArea = init(3);

console.log(getArea(2))

