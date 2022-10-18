// def name():
//     body
//     return something

function addNums(){
    let num = 4;
    let num2 = 5;
    return num + num2
}

console.log(addNums()) //9
console.log(typeof addNums()) //Number
console.log(typeof addNums) //function


function addNums2(num, num2){
    return num + num2
}
console.log(addNums2(4,5)) //9

// ES 6+ Arrow Functions

// If the arrow function body is only 1 line (very common) 
// then the one line is returned from the function by default
// and doesn't need braces

// const name  = (params) => { body }

const cubed = () => 3**3;
console.log(cubed()) // 27

// same as above but silly
const cubeda = () => {
    const x = 3
    return x**3
};
console.log(cubeda()) // 27

// IF the function take one PARAMETER we can omit the parens

const cubed2 = num => num**3  // only works with one param
const cubed2a = (num) => num**3

console.log(cubed2(3)) //27
console.log(cubed2a(3)) //27

// Multiparams must have parathesis 
const xpower=(x,p)=>x**p
console.log(xpower(3,3))//27


// Closures
function my_closure(){
    let counter = 0; // making this a private variable
    function add_to_count(){
        counter++;
        return counter
    }
    return add_to_count
}

let add = my_closure()
console.log(typeof add)
console.log(add()) // 1
console.log(add()) // 2
console.log(add()) // 3
console.log(add()) // 4

// anon function
console.log(
(function(nam){
    // let hello = 'Hello ' + nam
    // hello = f'Hello {nam}' in python
    let hello = `Hello ${nam}`;
    return hello
}) ('Todd Packard')
)
// anon function with arrow function
// (params)=>{function body}
console.log((()=>'hello')())

// A function that reutrna function or a function that
// accepts a function as a parameter is called a Higher Order Function

// Write me a function use the keyword function and again as an arrow function 
// that takes in 3 parameters one of a name, of age and of multiplier
// and return a string that says 
// If I multiply [PERSON's NAME] by [muiltiplier] I get [age x multiplier]

// Connor, 12, 5
// If I mulipty Connor's age by 5 I get 60
function my_func(name,age,multiplier){
    return `If I multiply ${name}’s age by ${multiplier} I get ${age*multiplier}`
 }
console.log(my_func("steve",55,2));

const funk = (name_, age, mult) => `If i multiply $ \n \t \{ \} ${name_}'s age by ${mult} I get ${age * mult}.`;
console.log(funk('steve', 55, 2))