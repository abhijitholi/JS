console.log('Start');

// const p1 = new Promise((resolve, reject)=>{
//     resolve(1);
// })

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response)=>response.json())
// .then((data)=> console.log(data));

async function getvalue(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const post = await response.json();
    console.log(post); 

}

getvalue();


console.log('End');