
function delayedFx() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // SomeAction is called here after the delay
            SomeAction();
            // Assuming SomeAction is asynchronous and resolves the promise
            resolve('SomeAction completed successfully');
        }, 3000);
    });
}

function SomeAction() {
    console.log('This is a function');
}

// Calling delayedFx and handling the promise
delayedFx()
    .then((result) => {
        console.log(result); // Output: SomeAction completed successfully
    })
    .catch((error) => {
        console.error(error);
    });
