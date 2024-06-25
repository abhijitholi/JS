`use strict`

// console.log('Start Code')
 //Globle scop 
// 
//  let a  = 100;
//  let b = 30;
//  {
    //  let a = 50;
    //  console.log(a);
    // let c = 0;
// 
//  }
//  {
    // let a = 60;
    // let c = 0
//  }
// 
//  function say (){
//     let a = 4;
//     return a;
//  }
//  console.log(say())


//console.log(x);
var x = 200;


/// loop 
// ****************  using let 
for (let i=0; i<2000;i++){
setTimeout(()=>{
    console.log(i)
},1000)
}; // output => 1,2,3,4,5,6,.....................200


// ************** using var 
for (var i=0; i<200;i++){
    setTimeout(()=>{
        console.log(i)
    },1010)
    };// output => 200,200,200,200,200.....................200
    


    function sayhii(name){
        console.log("hii"+" "+name)
    }

    sayhii("nsddas")
    sayhii("Abhi")