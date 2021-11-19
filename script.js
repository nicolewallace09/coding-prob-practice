// let array = [] // 3

// const addAll = (array) => {
//     if(array.length === 0) {
//         return 0;
//     }

//     let sum = 0;

//     for(let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum; 
// }

// console.log(addAll(array))

// const getVowels = (array) => {
//     let vowels = "aeiou"; 
//     let newArray = [];

//     for(let i = 0; i < array.length; i++) {
//         if(vowels.includes(array[i][0])) {
//             newArray.push(array[i])
//         } 
//     }
//     return newArray; 
// }

// console.log(getVowels(['elephant', 'hello', 'octopus']))
// console.log(getVowels(['hi', 'meow', 'yay']))

// const evenNumbers = (array) => {
//     let evenArray = []; 

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] % 2 === 0) {
//             evenArray.push(i)
//         }
//     }
//     return evenArray; 
// }

// console.log(evenNumbers([2, 5, 3, 4])) // [0,3]
// console.log(evenNumbers([1,3,5])) // []
// console.log(evenNumbers([0, 2, 4, 6])) // [0, 1, 2, 3]

// const more = (array) => {
//     let even = 0;
//     let odd = 0;

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] % 2 === 0) {
//             even++
//         } else {
//             odd++
//         }
//     }

//     if(even > odd) {
//         return "even";
//     } else {
//         return "odd"; 
//     }
// }
 
// console.log(more([1, 2, 3, 3, 3, 4])); // odd
// console.log(more([2, 2, 2, 3, 3, 4])); // even

const longestWord = (array) => {
    let longest = '';

    for(let i=0; i < array.length; i++) {
        if(array[i].length > longest.length) {
            longest = array[i]
        }
    }
    return longest;
}

console.log(longestWord(['one', 'two', 'superduper', 'dog'])); // superduper
console.log(longestWord(['hello', 'world'])); // hello
console.log(longestWord(['boo', 'a', 'I', 'hi'])); // boo