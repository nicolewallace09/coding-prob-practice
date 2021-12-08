// Prompt
// Write a function that accepts an array of strings. Return the longest string.
// input - String[] = an array of strings
// output - String = the longest of the strings in the array

// Initialize and Declare Variable for Longest String
// Loop through the array
// Find the length of each string
// Determine if that length is the largest we have seen so far.
// Replace the longest/largest variable with the arr[index] as long as length is greater than the variable.
// Return longest/largest string.

const longestString = (array) => {
    let longStr = ''; 

    for(let i = 0; i < array.length; i++) {
        if(array[i].length > longStr.length) {
            longStr = array[i];
            // console.log(array[i]) Returns string 
            // console.log(i) Returns index 
        }
    }
    return longStr; 
}

console.log(longestString(["Spiderman", "Thor", "Iron Man", "Hulk", "Black Widow"])); // Black Widow 