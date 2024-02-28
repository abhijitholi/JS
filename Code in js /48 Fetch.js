fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.text())
.then(response=>console.log(response))
