// Start a new branch, and switch to that branch. Make all your changes on that branch, and then do a pull request to merge the branch to your main branch. Don't know how to do that? Let me know, I will tell you how. 

// If you don't know how to run this quickly, you can always just do it in a repl.it window. Never used repl??!! 😲 🤪 🤭 Well, get on it, my friend. Google repl, or just go to the website repl.it. Just copy over your answer to this doc when you're done.

//1.  Write a script that logs to the console “Loading…” and then, 3 seconds later, “Hello, World!”

// Stretch: Make your console display “Ready…”, then “Set…”, then “Go!”, one second after another.


// a quick note: 👇 you can't use the arrow functions for callbacks. You have to use the full word. Bummer, I know... 

setTimeout (function(){
    
    // Your Code Here...

}, /* milliseconds */);


// 2. Make a counter using setInterval. Count up from 1, every second. 

// Stretch: Create two counters, one for even numbers, one for odd. Run them at the same time. 

setInterval(function(){

    // Your Code Here...

}, /* milliseconds */);


// 3. Use setInterval to log “ . “ to the console every second. Stop the logging after 10 seconds have passed. 
// Hint: use setTimeout to stop it. 

// Stretch: Build a blast-off countdown using setInterval. 
// 10 9 8 7 6 5 4 3 2 1 Blast Off!!

const interval = setInterval(function(){},/* milliseconds */);


