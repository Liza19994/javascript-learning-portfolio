// ========================================
// JAVASCRIPT TYPE CONVERSION
// ========================================


// ---------- 1. CHECKING DATA TYPE ----------

let score = 20;

console.log(typeof score);      // => number
console.log(typeof (score));    // => number

// Both are the same.
// typeof tells us the datatype of a value.



// ---------- 2. STRING TO NUMBER ----------

let score2 = "33";

let valueNumber = Number(score2);

console.log(valueNumber);         // => 33
console.log(typeof valueNumber);  // => number


// "33"  →  33
// string → number



// ---------- 3. INVALID STRING TO NUMBER ----------

let score3 = "33abc";

let valueNumber2 = Number(score3);

console.log(valueNumber2);         // => NaN
console.log(typeof valueNumber2);  // => number

// "33abc" cannot be properly converted into a number.
//
// NaN = Not a Number
//
// IMPORTANT:
// typeof NaN is "number"
//
// This looks strange, but this is how JavaScript works.



// ---------- 4. STRING TO BOOLEAN ----------

let isLoggedIn = "Liza";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // => true


// Non-empty string → true

// "Liza" → true
// "Hello" → true
// "abc" → true



// ---------- 5. NUMBER TO BOOLEAN ----------

let number = 0;

let booleanNumber = Boolean(number);

console.log(booleanNumber); // => false


// 0 → false
// 1 → true
// 20 → true
// -5 → true



// ---------- 6. EMPTY STRING TO BOOLEAN ----------

let name = "";

let booleanName = Boolean(name);

console.log(booleanName); // => false


// "" = empty string
// Empty string → false



// ---------- 7. PRINTING AN EMPTY STRING ----------

let emptyName = "";

console.log(emptyName);

// Output looks empty because the string contains
// no characters.
//
// But the variable DOES exist.
// It contains an empty string: ""



// ---------- 8. NUMBER TO STRING ----------

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);         // => 33
console.log(typeof stringNumber);  // => string


// 33   →   "33"
// number → string