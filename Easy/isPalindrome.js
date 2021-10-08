// Given a string, write a function that will return whether or not that string is a palindrome.
// input = string
// output = boolean

// reverse the string
// spilt string into array 
// join the string 
// compare new string to old string 


const isPalindrome = (str) => {
    let newStr = '';

    for(let i = 0; i < str.length; i++) {
        newStr += str[i]; 
    }

    for(let j = 0; j < newStr.length; j++) {
        if(newStr == str[j]) {
            return true;
        }
    }
    return false; 
}


console.log(isPalindrome("wow"));
console.log(isPalindrome("bobbie"));

// needs work