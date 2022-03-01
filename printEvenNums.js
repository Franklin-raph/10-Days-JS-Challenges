// Print all even numbers from 0 - 10
for(let i = 0; i<=10; i+=2){
    // console.log(i)
}

// Print the multiplication table between 1 to 10
let res = '\n'
let nums = [1,2,3,4,5,6,7,8,9,10,11,12]
nums.forEach((i) => {
    for(let j = 1; j < 13; j++){
        res += j*i + '  '
    }
    // console.log(res += '\n')
});

// Function that converts km to miles
const convert = (x) => {
    // console.log(x/1.609)
    // return x / 1.609
}
convert(10)

// Sum of numbers in an array
let total = 0;
let myArray = [1,2,3,-4,5,8,9,6,-9,8,0,8,76,-90,8.9,2.5]
myArray.forEach((element) => {
    total += element
})
// console.log(total)

// A function that reverses an array
const reverseArray = () => {
    let array = [1,2,3,4,5]
    let size = array.length - 1
    array.forEach((i) => {
        console.log(array[size])
        size --;
    })
}
reverseArray()

// Return true if divisible by 10
const boolean = (x) => {
    if( x%10 == 0 ){
        console.log("True")
    }else{
        console.log("False") 
    }
}
boolean(23)