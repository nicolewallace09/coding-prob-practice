// Write a function shoutGreetings() that takes in an array of strings and returns a new array. 
// This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

const shoutGreetings = (array) => {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
      newArray.push(array[i].toUpperCase() + "!");
     
    }
     return newArray;
  }
  


const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]