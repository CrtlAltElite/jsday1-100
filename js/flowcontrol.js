function determineAge(age){
    if ( age < 7 ){
        return "Your name must be Connor"
    }else if (age >=7 && age<=65){
        return "You are sadly Middle aged :-("
    }else{
        return "You must have hung out with Kevin as a child"
    }
}

console.log(determineAge(6))

// python and in JS is &&
// python or in JS is  ||

// inline If statements Ternary Operator!
// "value if true" if x > 10 else "value if false"

// condition ? expr True: expr False

function determineAge2(age){
    return age < 18 ? "Minor" : "Adult"
}

console.log(determineAge2(14))

function determineAge3(age){
    return age < 18 ? 'Minor' : age >= 65 ? 'In the grave' : 'Adult'
}
console.log(determineAge3(18))

let testList=["a","b","c"]
//  len(testList) in python
console.log(testList.length)


// Write me a function that takes a list
// If the list length if less or equal than 3 return too short
// if the list length is 4 return just right 
// and list length is greather than 4 return too big
function listLength(list){
    return list.length < 4 ? "Too short" : list.length == 4 ? "Just right" : "Too big"
}

console.log('========================')

let myArr = [34,23,1,21,346,2134,236,2,352,3]
for(let i=0; i<myArr.length; i++){
    console.log(`i is: ${i}`)
    console.log(myArr[i])
}

//skipping every other one
let myArr1 = [34,23,1,21,346,2134,236,2,352,3]
for(let i=0; i<myArr1.length; i+=2){
    console.log(`i is: ${i}`)
    console.log(myArr1[i])
}

//skipping everyone other one but doing the odd indicies
let myArr2 = [34,23,1,21,346,2134,236,2,352,3]
for(let i=1; i<myArr2.length; i+=2){
    console.log(`i is: ${i}`)
    console.log(myArr2[i])
}
let myArr4 = [34,23,1,21,346,2134,236,2,352,3]
// print the list backwards
for(let i=myArr4.length-1; i>=0; i--){
    console.log(`i is: ${i}`)
    console.log(myArr4[i])
}

// in python we had it good
// for name in names ... for num in myArr

// JS we have the for of!!!..
//ABSOLUTLEY NOT THE FOR IN LOOP
// for in loop is not for LISTS!!!!
let thisArr =["a","b","c"]

for (const letter of thisArr){
    console.log(letter)
}

// While loop!
let whileArr=[5,7,8165,5845,564,264,2,654,25]
let cnt=0
while(cnt<whileArr.length){
    console.log(whileArr[cnt])
    cnt++
}
console.log('========================')

// Do while
let y=0;
let text = ''

do{
    text += `I was here ${y}\n`
    y--
}while(y>0)
console.log(text)

let textz=''
let z=0
while(z>0){
    textz += `I was here ${z}\n`
    z--
}
console.log(textz)

let text2=''
for (let w=0; w>0; w--){
    text2 += `I was here ${w}\n`
}  
console.log(text2)