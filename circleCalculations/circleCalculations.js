//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 


//your code here
function circleCalculation(radius) {
    //your code here
    let area = Math.round(Math.PI * Math.pow(radius, 2));
    let perimeter = Math.round(Math.PI * (2 * radius));
    return ("The area of the circle is " + area + " and teh perimeter of the circle is " + perimeter + ".");
}

console.log(circleCalculation(10));