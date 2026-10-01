// ==========================================================
// JAVASCRIPT COMPARISON OPERATORS
// ==========================================================

// Comparison means comparing two values.

// >    Greater than
// <    Less than
// >=   Greater than or equal to
// <=   Less than or equal to
// ==   Equal to (loose equality)
// !=   Not equal to
// ===  Strict equal to
// !==  Strict not equal to


// ----------------------------------------------------------
// 1. BASIC COMPARISON
// ----------------------------------------------------------

console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 != 1);  // true
console.log(2 == 1);  // false


// ----------------------------------------------------------
// 2. COMPARING STRING AND NUMBER
// ----------------------------------------------------------

console.log("2" > 1);   // true
console.log("02" > 1);  // true

// JavaScript converts the string to a number for this comparison.
//
// "2"  → 2
// "02" → 2
//
// Therefore:
//
// 2 > 1 → true


// ----------------------------------------------------------
// 3. NULL COMPARISON
// ----------------------------------------------------------

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

// IMPORTANT:
// == and comparison operators such as >, <, >=, <=
// do NOT follow exactly the same conversion rules.

// For relational comparison, null can be treated like 0.

// null > 0
// 0 > 0
// false

// null >= 0
// 0 >= 0
// true

// But:

// null == 0
// false

// This is a strange JavaScript behaviour.
// For now, remember the result rather than worrying
// too much about the internal rules.


// ----------------------------------------------------------
// 4. UNDEFINED COMPARISON
// ----------------------------------------------------------

console.log(undefined == 0); // false
console.log(undefined < 0);  // false
console.log(undefined > 0);  // false


// ----------------------------------------------------------
// 5. == vs ===
// ----------------------------------------------------------

console.log("2" == 2);  // true

// == checks values after type conversion.
//
// "2" is a string
// 2 is a number
//
// JavaScript converts them before comparing.


console.log("2" === 2); // false

// === checks BOTH:
//
// 1. VALUE
// 2. DATATYPE
//
// "2" → string
//  2  → number
//
// Different datatypes → false


// ----------------------------------------------------------
// EASY WAY TO REMEMBER
// ----------------------------------------------------------

// ==
// Loose equality
// Can perform type conversion

// ===
// Strict equality
// Checks value AND datatype


// Example:

console.log(2 == "2");   // true
console.log(2 === "2");  // false

console.log(2 === 2);    // true


// ==========================================================
// QUICK REVISION
// ==========================================================

// 5 > 3       → true
// 5 < 3       → false
// 5 >= 5      → true
// 5 <= 5      → true

// 5 == "5"    → true
// 5 === "5"   → false
// 5 === 5     → true

// !=          → not equal
// !==         → strict not equal


// BEST PRACTICE:
// In normal JavaScript code, prefer === and !==
// when you want equality checks.