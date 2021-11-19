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

console.log(getVowels(['elephant', 'hello', 'octopus']))
console.log(getVowels(['hi', 'meow', 'yay']))