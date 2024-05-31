// function foo (b){
//     const a = 10;
//     return  a + b + 11;
// }

// function bar(x){
//     const y = 3;
//     return foo(x * y);
// }

// const baz = bar(7);

// console.log(baz);

// console.log("10"+"11"+"3"*"7");

// console.log("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop/the_javascript_runtime_environment_example.svg")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function task1() {
    console.log("Task 1: Starting");
    await sleep(2000);
    console.log("Task 1: Completed");
  }
  
  async function task2() {
    console.log("Task 2: Starting");
    await sleep(1000);
    console.log("Task 2: Completed");
  }
  
  async function task3() {
    console.log("Task 3: Starting");
    await sleep(3000);
    console.log("Task 3: Completed");
  }
  
  async function main() {
    console.log("Main: Starting event loop");
    const tasks = [task1(), task2(), task3()];
    await Promise.all(tasks);
    console.log("Main: Event loop completed");
  }
  
  // To run the event loop
  main();
  