// console.log
console.log("Hello, World!");
console.log(42);
console.log(true);
console.log(null);
console.log(undefined);
console.table({ name: "Alice", age: 30 });
console.log([1, 2, 3, 4, 5]);

//varaiables
let name = "John";
const age = 25;
var isStudent = true;
console.log(name, age, isStudent);

//data types    
let str = "This is a string";
let num = 100;
let bool = false;           
let nul = null;
let undef = undefined;
let obj = { key: "value" };
let arr = [1, 2, 3];    
console.log(typeof str, typeof num, typeof bool, typeof nul, typeof undef, typeof obj, typeof arr);

//operators
let a = 10;
let b = 5;
console.log(a + b); 
console.log(a - b);
console.log(a * b);
console.log(a / b);         
console.log(a % b);
console.log(a++);
console.log(--b);
console.log(a > b);     
console.log(a < b);
console.log(a >= b);
console.log(a <= b);    
console.log(a == b);
console.log(a != b);
console.log(a === b);       


//functions
function greet(name) {
    return `Hello, ${name}!`;
}   
console.log(greet("Alice"));

const add = (x, y) => x + y;
console.log(add(5, 3));
const square = n => n * n;
console.log(square(4));
const sayHi = () => "Hi!";
console.log(sayHi());       
const multiply = function(x, y) {
    return x * y;
};
console.log(multiply(4, 6));
// Recursive function
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
}
console.log(factorial(5));
// Math and Date
const max = Math.max(10, 20, 5);
console.log(max);    
// Minimum of numbers
const min = Math.min(10, 20, 5);
console.log(min);   
// Random number between 0 and 1
const randomNum = Math.random();
console.log(randomNum); 
// Random number between 0 and 100
const random100 = Math.floor(Math.random() * 101);
console.log(random100);       
// Rounding numbers
const roundNum = Math.round(4.7);
console.log(roundNum); 
// Flooring numbers
const floorNum = Math.floor(4.7);           
console.log(floorNum);
// Ceiling numbers
const ceilNum = Math.ceil(4.2);
console.log(ceilNum);     
// Power, Square root, Absolute value  
const powNum = Math.pow(2, 3);
console.log(powNum); 
//
const sqrtNum = Math.sqrt(16);
console.log(sqrtNum);   
//
const absNum = Math.abs(-10);
console.log(absNum);
// Trigonometric functions
const sinVal = Math.sin(Math.PI / 2);
console.log(sinVal);   
// Cosine function    
const cosVal = Math.cos(0);
console.log(cosVal); 
// Tangent function
const tanVal = Math.tan(Math.PI / 4);
console.log(tanVal);
// Logarithm and Exponential
const logVal = Math.log(10);
console.log(logVal);   
//
const expVal = Math.exp(2);
console.log(expVal); 
// Date and Time      
const date = new Date();
console.log(date);
// Year, Month, Day, Hours, Minutes, Seconds
const year = date.getFullYear();
console.log(year); 
// Month is zero-based, so add 1
const month = date.getMonth() + 1;
console.log(month);
// Day of the month
const day = date.getDate();
console.log(day);
// Day of the week (0=Sunday, 6=Saturday)
const hours = date.getHours();
console.log(hours);  
// Minutes
const minutes = date.getMinutes();
console.log(minutes); 
 // Seconds
const seconds = date.getSeconds();
console.log(seconds);
// Milliseconds since Jan 1, 1970
const timestamp = date.getTime();
console.log(timestamp);   
// Date string representations
const isoString = date.toISOString();
console.log(isoString); 
// Locale string representation
const localeString = date.toLocaleString();
console.log(localeString);
// JSON and String methods
const jsonString = JSON.stringify({ name: "Bob", age: 28 });
console.log(jsonString);
//  Parsing JSON string to object
const parsedObj = JSON.parse('{"name":"Bob","age":28}');
console.log(parsedObj); 
// String methods
const strLength = "Hello".length;
console.log(strLength);
//  Convert to upper and lower case
const upperStr = "hello".toUpperCase();
console.log(upperStr);   
// Convert to lower case
const lowerStr = "WORLD".toLowerCase();
console.log(lowerStr); 
// Substring, Replace, Trim, Split, Includes    
const subStr = "JavaScript".substring(0, 4);
console.log(subStr);
//
const replacedStr = "foo bar".replace("bar", "baz");
console.log(replacedStr);   
const trimmedStr = "  spaced  ".trim();
console.log(trimmedStr); 
const splitStr = "a,b,c".split(",");
console.log(splitStr);
const includesSubstr = "hello".includes("ell");
console.log(includesSubstr);   
const startsWithH = "hello".startsWith("h");
console.log(startsWithH);
const endsWithO = "hello".endsWith("o");
console.log(endsWithO);
const charAt2 = "hello".charAt(2);
console.log(charAt2);
const indexOfE = "hello".indexOf("e");
console.log(indexOfE);   
const lastIndexOfL = "hello".lastIndexOf("l");
console.log(lastIndexOfL);
const repeatStr = "ha".repeat(3);
console.log(repeatStr);
const padStartStr = "5".padStart(3, "0");
console.log(padStartStr);
const padEndStr = "5".padEnd(3, "0");
console.log(padEndStr);       
const charCode = "A".charCodeAt(0);
console.log(charCode);
const fromCharCode = String.fromCharCode(65);
console.log(fromCharCode);
const fromCodePoint = String.fromCodePoint(128512);
console.log(fromCodePoint);   
const codePointAt = "😀".codePointAt(0);