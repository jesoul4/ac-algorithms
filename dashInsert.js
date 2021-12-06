/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

function dashInsert(str) {
    // Your code
    console.log(num.toString());

    //variable to store a string into array [.split()]
    let numArr = num.toString().split("");
    //variable to store the string that will be returned
    let numString = "";

    //for loop for an array
    for (let i = 0; i < numArr.length; i++) {
        //inside for loop we need a conditional statement [if/else statement]
        if (numArr[i] % 2 === 1 && numArr[i + 1] % 2 === 1) {
            console.log("if block: ", numArr[i], numArr[i + 1]);
            numString += numArr[i] + "-";
            console.log("value of string: " + numString);
        } else {
            console.log("else block: ", numArr[i]);
            numString += numArr[i];
            console.log("value of string: " + numString);
        }
    }
    //condition needs a remainder operator
    return numString;
}

dashInsert(454793);