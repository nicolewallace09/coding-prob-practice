// Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// input = str1, str2 
// output = boolean

// compare the length, if they are not the same length they are not an anagram of each other
// sorting the string and using the equality operator to see if its equal


const isAnagram = (str1, str2) => {
    if (str1.length == str2.length) {
        let sort1 = str1.split('').sort(); 
        let sort2 = str2.split('').sort();

        if (sort1.join('') === sort2.join('')) {
            return true; 
        }
    } else {
        return false; 
    }
}

console.log(isAnagram("cinema","iceman"));
console.log(isAnagram("cinema","movie"));
