// Arrays AKA python lists
let grpONames = ['Diana', 'Connor', 'Gulfem', 'Caleb', 'Marco', 'KRod', 'Marcus']

// Caleb
console.log(grpONames[3])

// Python last member of alist DOES NOT WORK IN JS
console.log(grpONames[-1]) // Nope ! 

// Array destructing
let [diana, connor, gulfem, caleb, marco, ...therest] = grpONames
console.log(diana)
console.log(gulfem)
console.log(marco)
console.log(therest)
console.log('==========================================')

//looping through an array inline
grpONames.forEach((name)=>console.log(name))
console.log(grpONames)

console.log(grpONames.toString())

console.log(grpONames.join(', '))

console.log(grpONames.slice(2))

// Slice can use negative indexing
console.log(grpONames.slice(0,-1))
grpONames.splice(3,0,'Dylan')
console.log(grpONames)
grpONames.splice(4, 1,'Terry')
console.log(grpONames)

// my_list.append(element to append)  ... this function returns None
 console.log(grpONames)
 console.log(grpONames.push("Kevin")) // return the length of the list after the push
 console.log(grpONames)

 console.log(grpONames.push("Steve")>11)


console.log(grpONames.pop())
console.table(grpONames)

console.log(grpONames.indexOf("Gulfem")) //2

console.log(grpONames.indexOf("Steve")) // if not there you get -1


const nums = [2,4,6,8,10]
// .shift which is pop but for the left side 
let shiftedNums = nums.shift()
console.log(shiftedNums)
console.log(nums)
// put something at the front of the list
nums.unshift(123)
console.log(nums)

// == === equals and triple equals
// Double equals compares the values
// triple equals compares the type and the value!

console.log(1==1) // true
console.log(1=="1") //true
console.log(1===1) //true
console.log(1==="1")// false

// map reduce and filter
let bigNameList = [
    "Connor", "Caleb", "KRod", "Marco", "Christian", "Gulfem", "Carol"
]

// make a new list with just the C names 
let cNames = bigNameList.map((nam)=>{
    if (nam[0].toLowerCase()=='c'){
        return nam
    }else{
        return 'Name not C Name'
    }
})
console.log(cNames)

// filter
let cNames2= bigNameList.filter(nam=>nam[0].toLowerCase()=='c')
console.log(cNames2)

//reduce 
const nums1 = [2,4,6,8,10]
let numsSum=nums1.reduce((accumlator, currentNum)=>accumlator+currentNum)
console.log(numsSum)