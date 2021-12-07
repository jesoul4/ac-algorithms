/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

function swapCase(str) {
    // Your code
    function swapCase(str) {
        // Your code 
        //   for loop, split, .join();

        let worldString = str.split("");

        for (i = 0; i < worldString.length; i++) {

            if (worldString[i] === worldString[i].toUpperCase()) {
                worldString[i] = worldString[i].toLowerCase();
            } else if (worldString[i] === worldString[i].toLowerCase()) {
                worldString[i] = worldString[i].toUpperCase();
            } else {
                worldString[i] = worldString[i]
            }
        }
        let finalString = worldString.join("");
        return finalString;
    }

    var result1 = swapCase("Hello World");
    var result2 = swapCase(" ")
    var result3 = swapCase("oh, Hello!!");
    console.log(result1, result2, result3);

}