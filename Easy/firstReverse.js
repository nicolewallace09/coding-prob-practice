// takes in a string and returns in a reverse order

const firstReverse = (str) => {
    var newStr = ''; 

    // loop through the string
    for(let i = 0; i < str.length; i++) {
        // add into the new string variable 
        newStr = str[i] + newStr;
    }
    return newStr; 
}

console.log(firstReverse("Nicole")); 

