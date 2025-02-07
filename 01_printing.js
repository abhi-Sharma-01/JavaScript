console.log("Abhi");
console.log("Sharma");

// Another method to print in JavaScript using process.stdout
process.stdout.write("Today is Day 1 of JavaScript");
process.stdout.write("We are learning to print text/messages in the JavaScript\n");



// Various methods for the console object
/*
    The console object in JavaScript provides various methods for outputting information.
    Some of these methods are:
    - clear
    - count
    - table
    - warn
    - log
    - error
    - info
    - group
*/

// Logging methods
console.log("This is a log message."); // Logs a general message
console.warn("This is a warning message."); // Logs a warning message
console.error("This is an error message."); // Logs an error message
console.info("This is an info message."); // Logs an informational message
console.table({ city: "Jaipur" }); // Logs data in a tabular format

// Counting method
console.count("counter"); // Counts the number of times this line has been called
console.count("counter"); 

/*
// Clearing the console
 console.clear();  //Clears the console  , commment it if want to execute code 

 */

// Grouping methods
console.group("Group Name"); // Starts a new group
console.log("Inside the group."); // Logs a message inside the group
console.groupEnd(); // Ends the group


// Timing methods

console.time("Timer Name"); 

console.timeEnd("Timer Name"); 
// Stops the timer and logs the elapsed time


