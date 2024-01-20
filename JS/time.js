const timestamp = Date.now(); // Get current timestamp in milliseconds

// Create a new Date object using the timestamp
const currentDate = new Date(timestamp);

// Get individual components of the date
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Note: Months are zero-based
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Display the formatted date and time
console.log(`Current date and time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
