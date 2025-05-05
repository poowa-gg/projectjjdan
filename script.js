// 1. VARIABLES (declaring with let and const)
let clickCount = 0; // mutable variable
const MAX_CLICKS = 5; // immutable constant

// 2. DATA TYPES
const user = { // object
    name: "John",
    age: 30,
    isStudent: true,
    courses: ["JavaScript", "HTML", "CSS"] // array
};

// 3. ARRAY (with different data types)
const numbers = [1, 2, 3, 4, 5];
const mixedArray = [10, "text", true, { key: "value" }];

// 4. LOOPS (for loop to display array content)
function displayArray() {
    let output = "<ul>";
    for (let i = 0; i < numbers.length; i++) {
        output += `<li>Element at index ${i}: ${numbers[i]}</li>`;
    }
    output += "</ul>";
    document.getElementById("arrayOutput").innerHTML = output;
}

// 5. DOM MANIPULATION
document.getElementById("array-btn").addEventListener("click", displayArray);

// 6. STATEMENTS (if/else)
function checkClickLimit() {
    if (clickCount >= MAX_CLICKS) {
        document.getElementById("event-output").textContent = "You've reached the maximum clicks!";
        document.getElementById("click-me").disabled = true;
    } else {
        document.getElementById("event-output").textContent = `Button clicked ${clickCount} times.`;
    }
}

// EVENT HANDLING
document.getElementById("click-me").addEventListener("click", function() {
    clickCount++;
    checkClickLimit();
});

// FUNCTIONAL PROGRAMMING (pure function)
function squareNumber(num) {
    return num * num;
}

document.getElementById("calculate").addEventListener("click", function() {
    const input = document.getElementById("number-input").value;
    const number = parseFloat(input);

    if (!isNaN(number)) { // Fix: use 'number' instead of 'num'
        const result = squareNumber(number);
        document.getElementById("fp-output").textContent = `The square of ${number} is ${result}.`;
    } else {
        document.getElementById("fp-output").textContent = "Please enter a valid number.";
    }
});

// ARROW FUNCTIONS
const multiply = (a, b) => a * b;

// Using arrow function as callback
document.getElementById("array-btn").addEventListener("click", () => {
    console.log("Array button clicked!");
});

// ARRAY METHODS (map, filter, reduce)
function processArray() {  // Fix: Rename to processArray
    // Map - creates new array by transforming each element
    const squared = numbers.map(num => num * num);

    // Filter - creates new array with elements that pass a test
    const evenNumbers = numbers.filter(num => num % 2 === 0);

    // Reduce - reduces array to a single value
    const sum = numbers.reduce((total, num) => total + num, 0);

    document.getElementById("array-output").innerHTML = `
        <p>Original Array: [${numbers.join(", ")}]</p>
        <p>Squared Array:  [${squared.join(", ")}]</p>
        <p>Even Numbers:   [${evenNumbers.join(", ")}]</p>
        <p>Sum of Array:   ${sum}</p>
    `;
}

// Fix: Add event listener to ensure processArray() runs
document.getElementById("array-btn").addEventListener("click", processArray);

// DESTRUCTURING
document.getElementById("destructure-btn").addEventListener("click", function() {
    // Object destructuring
    const { name, age, courses } = user;

    // Array destructuring
    const [firstCourse, secondCourse] = courses;

    document.getElementById("destructure-output").innerHTML = `
        <p>User: ${name}, Age: ${age}</p>
        <p>First course: ${firstCourse}</p>
        <p>Second course: ${secondCourse}</p>
    `;
});

// TEMPLATE LITERALS
document.getElementById("template-btn").addEventListener("click", function() {
    const name = "John";
    const age = 30;
    const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
    document.getElementById("template-output").textContent = greeting;
});

// TERNARY OPERATOR
document.getElementById("ternary-btn").addEventListener("click", function() {
    const age = 20;
    const message = age >= 18 ? "You are an adult." : "You are a minor.";
    document.getElementById("ternary-output").textContent = message;
});

// SPREAD OPERATOR
document.getElementById("spread-btn").addEventListener("click", function() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2];
    document.getElementById("spread-output").textContent = `Combined array: [${combined.join(", ")}]`;
});
