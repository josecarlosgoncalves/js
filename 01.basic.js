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
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
}
console.log(factorial(5));
const max = Math.max(10, 20, 5);
console.log(max);       
const min = Math.min(10, 20, 5);
console.log(min);   
const randomNum = Math.random();
console.log(randomNum); 
const roundNum = Math.round(4.7);
console.log(roundNum); 
const floorNum = Math.floor(4.7);           

console.log(floorNum);
const ceilNum = Math.ceil(4.2);
console.log(ceilNum);       
const powNum = Math.pow(2, 3);
console.log(powNum); 
const sqrtNum = Math.sqrt(16);
console.log(sqrtNum);   
const absNum = Math.abs(-10);
console.log(absNum);
const sinVal = Math.sin(Math.PI / 2);
console.log(sinVal);       
const cosVal = Math.cos(0);
console.log(cosVal); 
const tanVal = Math.tan(Math.PI / 4);
console.log(tanVal);
const logVal = Math.log(10);
console.log(logVal);   
const expVal = Math.exp(2);
console.log(expVal);       
const date = new Date();
console.log(date);
const year = date.getFullYear();
console.log(year); 
const month = date.getMonth() + 1;
console.log(month);
const day = date.getDate();
console.log(day);
const hours = date.getHours();
console.log(hours);       
const minutes = date.getMinutes();
console.log(minutes); 
const seconds = date.getSeconds();
console.log(seconds);
const timestamp = date.getTime();
console.log(timestamp);   
const isoString = date.toISOString();
console.log(isoString); 
const localeString = date.toLocaleString();
console.log(localeString);
const jsonString = JSON.stringify({ name: "Bob", age: 28 });
console.log(jsonString);   
const parsedObj = JSON.parse('{"name":"Bob","age":28}');
console.log(parsedObj); 
const strLength = "Hello".length;
console.log(strLength);
const upperStr = "hello".toUpperCase();
console.log(upperStr);   
const lowerStr = "WORLD".toLowerCase();
console.log(lowerStr); 
const subStr = "JavaScript".substring(0, 4);
console.log(subStr);
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