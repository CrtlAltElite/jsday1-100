// console.log('Hello world!');
/*
    multiline
    comment

*/

// WRITE WITH SNAKE CASE

var firstName;
console.log(firstName); // undefined
null // python None
firstName = "Steve";
console.log(firstName);

var lastName = "Bush";
console.log(lastName) ;
lastName = "Clinton";
console.log(lastName);

// Numeric Type 
var someNumber = 41;
console.log(someNumber);
console.log(typeof someNumber)

// float
var someFloat = 3.1415912;
console.log(someFloat)
console.log(typeof someFloat)

// boolean
var someBool
console.log(someBool)
someBool = false;
console.log(someBool)
someBool = true
console.log(someBool)

// Array (list)
var someArray = [1,2,3];
console.log(someArray);

// Object Variable
var someObject = {'test':'Please Test Me!'}
console.log(someObject)
console.table(someObject)

var key = "steve"
var testObj = {key:123}
console.log(testObj)
//KEYS NEVER EVALUATE
someObject = {test:'Please Test Me!'}
console.log(someObject)

var firstName = "Steve"
// {firstName:"Steve"}
var newObj = {firstName, lastName:"Nash"} 
console.table(newObj)


// HOISTING 

// WIERD JS STUFF
console.log(notHere)
var notHere="Steve"
console.log(notHere)


testHoist()
function testHoist(){
    let blah = "blah";
    console.log(blah);
}
testHoist()

// ARROW FUNCTIONS DO NOT HOIST
// testNoHoist()
let testNoHoist=()=>{
    let blah = "blah";
    console.log(blah); 
}
testNoHoist()

// Math
let sum = 5+5;
console.log(sum)//10
sum += 5;
console.log(sum); // 15
console.log(sum++, 'rightside')  // sum = sum + 1
console.log(sum)// 16

console.log(++sum, 'leftside')
console.log(sum)

// Subtract
let diff = 5 - 5 
console.log(diff) //0
diff -= 5 
console.log(diff) //-5
diff--
console.log(diff) //-6

// multiply
let prod = 5*5;
console.log(prod) // 25
prod *= 5
console.log(prod) // 125

// Divide
let divide = 5/5
console.log(divide) // 1
console.log(typeof divide)
divide /= 5;
console.log(divide) // .20
console.log(typeof divide)

console.log(parseInt(divide))
console.log(parseFloat('.025'))

// Exponents
let square = 5**2
console.log(square) //25
square **= 2 // 25^2
console.log(square) //625

// Floor division in python it is // but in JS it is not built in to the language
let floor= Math.floor(5/2); //2.5
console.log(floor) // floors rounds down to 2
let ceil = Math.ceil(5/2) //2.5
console.log(ceil) //ceil round ups to 3

// adding strings and numbers

let stuff = 3.14 + '4'
console.log(stuff) // 3.144

let stuff1 = 3.14 + parseInt('4') // 7.140000000001
console.log(typeof stuff1) 
console.log(stuff1.toFixed(2)) // 7.14

let stuff2 = 3.14.toString() + '4'
console.log(stuff2) //3.144
