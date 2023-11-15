console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
    return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
    return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello, Ryan!"', helloName('Ryan'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log('Test - should multiply two numbers!"', addNumbers(2, 3));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
    return num1 * num2 * num3;
}
console.log('Test - should multiply 3 numbers 2, 3, 4: (24)', multiplyThree(2, 3, 4));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Test - 4 should return true', isPositive(4));
console.log('Test - -2 should return false', isPositive(-2));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
    if (array.length > 0) {
        return array[array.length - 1];
    } else {
        return undefined;
    }
}
let array1 = ["First Element", "Second Element", "Last Element"];
let array2 = [];

console.log('Test - should return the last element: ', getLast(array1));
console.log('Test - should return undefined: ', getLast(array2));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        } 
    }
    return false;
}
let array3 = ["Dog", "Cat", "Beaver", "Lion"];

console.log('Test - Given the value "Dog", should return true: ', find("Cat", array3));
console.log('Test - Given the value "Crocodile", should return true: ', find("Crocodile", array3));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
    if (letter === string[0]) {
        return true;
    } else {
        return false
    }
}
let testString = "Hello";
console.log('Test - should return true', isFirstLetter("H", testString));
console.log('Test - should return false', isFirstLetter("e", testString));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Test - should add the numbers from the numbersArray to equal 55: ', sumAll(numbersArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let positiveArray = [1, 2, -3, 4];
let negativeArray = [-1, -2, -3, -4];

console.log('Test - should return "1,2,4": ', allPositive(positiveArray));
console.log('Test - should return an empty array: ', allPositive(negativeArray));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

function fizzBuzz(array) {
    for(let i = 0; i < array.length; i++){
        if (array[i] % 3 === 0 && array[i] % 5 ===0) {
            console.log("Fizbuzz");
        } else if (array[i] % 3 === 0) {
            console.log("Fizz");
        } else if (array[i] % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(array[i]);
        }
    }
}

let startNumber = 1;
let endingNumber = 100;
let fizzBuzzArray = []

for (let i = startNumber; i <= endingNumber; i++) {
    fizzBuzzArray.push(i);
}

console.log("------------- FIZZ BUZZ FUNCTION TEST -------------");
fizzBuzz(fizzBuzzArray);




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        hello,
        helloName,
        addNumbers,
        multiplyThree,
        isPositive,
        getLast,
        find,
        isFirstLetter,
        sumAll,
        allPositive,
    };
} catch (e) {
  // Do nothing
}
