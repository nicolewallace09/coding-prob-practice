// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

const convertToBaby = (array) => {
    let babyArray = [];
    for(let i = 0; i < array.length; i++) {
      babyArray.push('baby ' + array[i]);
    }
    return babyArray;
  }
  
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

