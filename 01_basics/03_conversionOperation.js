// ========================================
// JAVASCRIPT TYPE CONVERSION
// ========================================


// ---------- 1. CHECKING DATA TYPE ----------

let score = 20;

// console.log(typeof score);      // => number
// console.log(typeof (score));    // => number

// Both are the same.
// typeof tells us the datatype of a value.



// ---------- 2. STRING TO NUMBER ----------

let score2 = "33";

let valueNumber = Number(score2);

// console.log(valueNumber);         // => 33
// console.log(typeof valueNumber);  // => number


// "33"  →  33
// string → number



// ---------- 3. INVALID STRING TO NUMBER ----------

let score3 = "33abc";

let valueNumber2 = Number(score3);

// console.log(valueNumber2);         // => NaN
// console.log(typeof valueNumber2);  // => number

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

// console.log(booleanIsLoggedIn); // => true


// Non-empty string → true

// "Liza" → true
// "Hello" → true
// "abc" → true



// ---------- 5. NUMBER TO BOOLEAN ----------

let number = 0;

let booleanNumber = Boolean(number);

// console.log(booleanNumber); // => false


// 0 → false
// 1 → true
// 20 → true
// -5 → true



// ---------- 6. EMPTY STRING TO BOOLEAN ----------

let name = "";

let booleanName = Boolean(name);

// console.log(booleanName); // => false


// "" = empty string
// Empty string → false



// ---------- 7. PRINTING AN EMPTY STRING ----------

let emptyName = "";

// console.log(emptyName);

// Output looks empty because the string contains
// no characters.
//
// But the variable DOES exist.
// It contains an empty string: ""



// ---------- 8. NUMBER TO STRING ----------

let someNumber = 33;

let stringNumber = String(someNumber);

// console.log(stringNumber);         // => 33
// console.log(typeof stringNumber);  // => string


// 33   →   "33"
// number → string


//************************************** OPERATIONS  *********************************************** *//

// ==========================================================
// JAVASCRIPT OPERATIONS - NOTES + PRACTICE
// ==========================================================


// ----------------------------------------------------------
// 1. BASIC ARITHMETIC OPERATORS
// ----------------------------------------------------------

console.log(2 + 2);   // 4  → Addition
console.log(2 - 2);   // 0  → Subtraction
console.log(2 * 2);   // 4  → Multiplication
console.log(2 ** 3);  // 8  → Power (2 × 2 × 2)
console.log(2 / 3);   // 0.666... → Division
console.log(2 % 2);   // 0  → Remainder / Modulus


// ----------------------------------------------------------
// 2. NEGATIVE VALUE
// ----------------------------------------------------------

let value = 3;
let negValue = -value;

console.log(negValue); // -3


// ----------------------------------------------------------
// 3. STRING CONCATENATION
// ----------------------------------------------------------

// + can also join strings.

let str1 = "Hello";
let str2 = " Liza";

let str3 = str1 + str2;

console.log(str3); // Hello Liza


// ----------------------------------------------------------
// 4. STRING + NUMBER
// ----------------------------------------------------------

console.log("1" + 2);       // "12"
console.log(1 + "2");       // "12"

console.log("1" + 2 + 2);   // "122"
console.log(1 + 2 + "2");   // "32"


// WHY?

// JavaScript evaluates these from LEFT TO RIGHT.

// "1" + 2 + 2
//
// "1" + 2
//    ↓
//   "12"
//
// "12" + 2
//    ↓
//   "122"


// But:

// 1 + 2 + "2"
//
// 1 + 2
//   ↓
//   3
//
// 3 + "2"
//   ↓
//  "32"


// Avoid writing confusing expressions like this in real projects.


// ----------------------------------------------------------
// 5. BOOLEAN CONVERSION USING +
// ----------------------------------------------------------

console.log(true);   // true
console.log(+true);  // 1

console.log("");     // empty string
console.log(+"");    // 0

// JavaScript converts the value to a number because of unary +.
//
// true → 1
// ""   → 0
//
// This is possible, but don't write code like this when learning.
// Number(true) and Number("") are much clearer.


// ----------------------------------------------------------
// 6. MULTIPLE ASSIGNMENT
// ----------------------------------------------------------

// This works:

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

// All become 4.

// But avoid this style because it can make code harder to read.

// Clearer:

let number1 = 4;
let number2 = 4;
let number3 = 4;


// ----------------------------------------------------------
// 7. INCREMENT OPERATOR ++
// ----------------------------------------------------------

let gameCounter = 100;

gameCounter++;

console.log(gameCounter); // 101

// ++ means increase by 1.


// ==========================================================
// PREFIX vs POSTFIX
// ==========================================================


// ----------------------------------------------------------
// 8. POSTFIX: x++
// ----------------------------------------------------------

let x = 3;
const y = x++;

console.log(`x: ${x}, y: ${y}`);

// OUTPUT:
// x: 4, y: 3


// POSTFIX RULE:
//
// x++
//
// USE OLD VALUE FIRST
// THEN INCREASE IT
//
//
// x = 3
//
// y = x++
//
// Step 1:
// y gets OLD x
// y = 3
//
// Step 2:
// x increases
// x = 4
//
// FINAL:
//
// x = 4
// y = 3


// ----------------------------------------------------------
// 9. PREFIX: ++a
// ----------------------------------------------------------

let a = 3;
const b = ++a;

console.log(`a: ${a}, b: ${b}`);

// OUTPUT:
// a: 4, b: 4


// PREFIX RULE:
//
// ++a
//
// INCREASE FIRST
// THEN USE NEW VALUE
//
//
// a = 3
//
// b = ++a
//
// Step 1:
// Increase a
// a = 4
//
// Step 2:
// b gets NEW a
// b = 4
//
// FINAL:
//
// a = 4
// b = 4


// ==========================================================
// EASY MEMORY TRICK
// ==========================================================

// POSTFIX
// x++
//
// USE → INCREASE
//
// let x = 3;
// let y = x++;
//
// x = 4
// y = 3


// PREFIX
// ++x
//
// INCREASE → USE
//
// let x = 3;
// let y = ++x;
//
// x = 4
// y = 4


// ----------------------------------------------------------
// IMPORTANT
// ----------------------------------------------------------

// If you only increment the variable:

// gameCounter++;
// OR
// ++gameCounter;

// Both increase gameCounter by 1.

// The difference becomes important when the RESULT
// of the expression is being used or assigned.

// Example:
//
// let y = x++;
//
// vs
//
// let y = ++x;


// ==========================================================
// QUICK REVISION
// ==========================================================

// +    → Addition / String concatenation
// -    → Subtraction
// *    → Multiplication
// /    → Division
// %    → Remainder
// **   → Power
// ++   → Increase by 1

// x++  → Postfix → use OLD value, then increase
// ++x  → Prefix  → increase first, then use NEW value
