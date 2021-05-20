// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

const reverseArray = (sentence) => {
    let newArray = [];
    for(let i = sentence.length-1 ; i >= 0; i--) {
      newArray.push(sentence[i])
    }
    return newArray;
  }
  
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
