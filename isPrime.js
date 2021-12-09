/*

Given a number between 1 and 2^16, return true if the number is prime, return false if it is not.
Remember 2 is a prime number and 1 is not.

Hint: You may not need to check numbers up to num to check for primeness.

*/

/**

Examples:

var result = isPrime(1)
console.log(result) // false

var result = isPrime(2)
console.log(result) // true

var result = isPrime(3)
console.log(result) // true

var result = isPrime(4)
console.log(result) // false

var result = isPrime(29)
console.log(result) // true

var result = isPrime(51)
console.log(result) // false

**/

function isPrime(num) {
    // Your code
    function isPrime(n) {
        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (let i = 2; i < n; i++) {
                if (n % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    //     console.log(isPrime(1));
    //     console.log(isPrime(2));
    //     console.log(isPrime(3));
    //     console.log(isPrime(4));
    //     console.log(isPrime(29));
    //     console.log(isPrime(51));

    // for (let i = 2; i < n; i++) {
    //     if (n % i === 0) {
    //         return false;
    //     }
    // }
    // return n > 1