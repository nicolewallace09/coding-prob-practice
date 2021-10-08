// Write a function that takes a string and returns the character that is most commonly used in the string
// input = string 
// output = string (character)

// count how many characters we have using object key:value pairs 
// define an object
// map character count to that object
// loop through the object to find max count
// assign new max count value to maxCharCount and new max key to maxChar
// return maxChar 

const commonChar = (str) => {
    let charCount = {}; 
    let maxCharCount = 0;
    let maxChar = '';

    for(let i = 0; i < str.length; i++) {
        charCount[str[i]] += charCount || 1;
    }

    for(let key in charCount) {
        if(charCount[key] >= maxCharCount) {
            maxCharCount = charCount[key]
            maxChar = key;
        }
    }
    return maxChar; 
}

console.log(commonChar("banana"));

// Create a charCount object. This object can be named whatever you’d like as long as it’s consistent.
// Use a standard for loop to iterate through the string, and check to see if it exists in the charCount object. If it does, add 1 to CharCount[key] and reassign it to the same variable. The pipes here will cover any instance where the key does not yet exist in the object and initialize the count to 1.
// Loop through the object using a for...in loop. This type of loop allows us to iterate over each property in an object to look at its value. In this instance we want to find the largest number.
// The wording for this problem indicates that they want us to find the last max number (in the case there is more than one character with the same amount of appearances), so we use >= to reassign the maxChar if needed.
// Return our maxChar.