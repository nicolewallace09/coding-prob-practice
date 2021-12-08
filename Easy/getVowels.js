// given an array of words
// return a new array with every word that starts with a vowel 
// return an empty array if there are no vowels 


const getVowels = (array) => {
    let vowels = "aeiou"; 
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        if(vowels.includes(array[i][0])) {
            newArray.push(array[i])
        } 
    }
    return newArray; 
}

console.log(getVowels(['elephant', 'hello', 'octopus'])) // ["elephant", "octopus"]
console.log(getVowels(['hi', 'meow', 'yay'])) // [] 