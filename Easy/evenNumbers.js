const evenNumbers = (array) => {
    let evenArray = []; 

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenArray.push(i)
        }
    }
    return evenArray; 
}

console.log(evenNumbers([2, 5, 3, 4])) // [0,3]
console.log(evenNumbers([1,3,5])) // []
console.log(evenNumbers([0, 2, 4, 6])) // [0, 1, 2, 3]